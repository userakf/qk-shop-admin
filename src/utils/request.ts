import axios, { AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL
})
// 请求拦截器
request.interceptors.request.use((config) => {
    // 统一设置用户 token
    return config
}, (error) => {
    return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use((response) => {
    // 统一处理接口响应错误，比如 token过期 服务器异常
    if(response.data.status && response.data.status !== 200){
        ElMessage.error(response.data.msg || '请求失败，请稍后重试')
        // 手动返回Promise异常
        return Promise.reject(response.data.msg || '请求失败，请稍后重试')
    }
    return response
}, (error) => {
    return Promise.reject(error)
})
export default <T = any>(config:AxiosRequestConfig) => {
    return request(config).then(res => {
        return res.data.data as T
    })
}