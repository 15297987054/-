import http from '@utils/http';

export const LoginMsg = (userId,password,verifyCode) => http.post("/user/v2/login", {
    username:userId,
    password:password,
    captcha_code:verifyCode
})

export const VERIFYCODEPIC=()=>http.post('/user/v1/captchas',{})