import axios from 'axios'
import {CONFIG} from '../config'
axios.create({
    baseURL:CONFIG.BASE_URL,
    timeout:20000
})

axios.interceptors.request.use(function(config){
    return config
},function(error){
    Promise.reject(error)
})

axios.interceptors.response.use(function(response){
    return response
},function(error){
    Promise.reject(error)
})


export default axios