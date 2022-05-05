export interface Logininfo {
    logo_square:string
    logo_rectangle:string
    login_logo:string
    slide:string[]
}
export interface Menu {
    path:string
    title:string
    icon:string
    header:string
    is_header:number
    chlidren?:Menu
}
export interface UserInfo {
    id:number
    account:string
    head_pic:string
}
export interface LoginResponse {
    token:string
    expires_time:number
    menus:Menu[]
    unique_auth:string[]
    user_info:UserInfo
    logo:string
    logo_square:string
    version:string
    newOrderAudioLink:string
}