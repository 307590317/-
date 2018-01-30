import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';
//允许跨域携带凭证（cookie）；
axios.defaults.withCredentials=true;
axios.interceptors.response.use(res=>res.data);
export default axios;