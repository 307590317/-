let express=require('express');
let app=express();
let fs=require('fs');
let bodyParser=require('body-parser');
//session中间件，解决带cookie的问题
let session=require('express-session');
app.use(bodyParser.json());
app.listen(3000,()=>{
  console.log('成功监听3000端口');
});
/**
 * 读取文件中的内容
 * @param filename:要读取的文件名称(字符串格式或者buffer格式)
 * @param cb:读取成功后执行的回调函数
 */
let read=(filename,cb)=>{
  fs.readFile(filename,(err,data)=>{
    if(err||data.length===0){
      cb([]);
    }else{
      cb(JSON.parse(data));
    }
  });
};
/**
 * 向文件中写入内容
 * @param filename:要写入的文件的名称(字符串格式或者buffer格式)
 * @param data:要写入的数据(需要转换为JSON字符串格式的)
 * @param cb:写入成功后执行的回调函数
 */
let write=(filename,data,cb)=>{
  fs.writeFile(filename,JSON.stringify(data),cb);
};
//允许跨域
app.use((req,res,next)=>{
  /*res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  //允许跨域并携带cookies
  res.setHeader("Access-Control-Allow-Credentials",true);*/
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
  next();
});
//静态资源请求
app.use(express.static('./'));
//获取问号传参后面的参数:获取后放到req的自定义属性id上以后可以直接用
app.use((req,res)=>{
  req.id=parseInt(req.query.id);
  next();
});
//轮播图
app.get('/sliders',(req,res)=>{
  res.json(require('./sliders'));
});
//获取推荐歌单
app.get('/musicList',(req,res)=>{
  if(!isNaN(req.id)){//如果有id说明要获取推荐歌单中的一个
    read('./musicList.json',lists=>{
//find:每一项执行回调函数，返回回调函数return为true的结果，如果都返回false，则find返回undefined,所以取不到的话用空对象代替
      let one=lists.find(item=>item.id===req.id)||{};
      res.json(one);
    })
  }else{
    //没有ID代表要获取全部推荐歌单
    read('./musicList.json',lists=>{
      res.json(lists);
    });
  }
  res.json(musicList);
});
//修改某一歌单试听参数
app.put('/musicList',(req,res)=>{
  if(!isNaN(req.id)){
    read('./musicList.json',lists=>{
      lists=lists.map(item=>{
        item.id===req.id?item.listen++:null;
        return item;
      });
      write('./musicList.json',lists,()=>{
        res.json('修改试听参数成功');
      })
    })
  }
});
//获取精选专栏
app.get('/selections',(req,res)=>{
  if(!isNaN(req.id)){
    read('./selections',lists=>{
      let one=lists.find(item=>item.id===req.id)||{};
      res.json(one);
    })
  }else{
    read('./selections',lists=>{
      res.json(lists);
    })
  }
});
//修改精选专栏阅读数
app.put('/selections',(req,res)=>{
  if(!isNaN(req.id)){
    read('./selections.json',lists=>{
      lists=lists.map(item=>{
        item.id===req.id?item.readNum++:null;
        return item;
      });
      write('./selections.json',lists,()=>{
        res.json('修改阅读参数成功');
      })
    })
  }
});
//获取vip数据
app.get('/vip',(req,res)=>{
  res.json(require('./vip'));
});