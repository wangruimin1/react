import axios from 'axios';
import qs from 'qs'
const instance = axios.create({
    baseURL:"http://localhost:3001",
    timeout:3000
})
instance.interceptors.request.use(config=>{
    if(config.method==="post"){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})
instance.interceptors.response.use(response=>{
    return response;
},(error)=>{
    return Promise.reject(error.response.status)
})
export default instance;