/**
 * 公共基础接口封装
 */

import request from "@/utils/request";
import { Logininfo } from './types/common'
// interface ResponseData<T = any> {
//     status:number,
//     msg:string,
//     data:T
// }

export const getLoginInfo = () => {
    return request<Logininfo>({
        method:'GET',
        url:'/login/info'
    })
    // return request.get<{
    //     status:number,
    //     msg:string,
    //     data:{
    //         logo_square:string,
    //         logo_rectangle:string,
    //         login_logo:string,
    //         slide:string[]
    //     }
    // }>('/login/info')

    // return request.get<ResponseData<{
    //     logo_square:string,
    //     logo_rectangle:string,
    //     login_logo:string,
    //     slide:string[]
    // }>>('/login/info')
    //     .then(res => {
    //         return res.data
    //     })
}