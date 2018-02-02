//此处放的是工具函数
export let dataForMata=(number)=>{
  let time=new Date(number);
  let year=time.getFullYear();
  let Month=time.getMonth()+1;
  let day=time.getDate();
  return `${year}年${Month}月${day}日`;
};
