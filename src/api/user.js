import http from "@utils/http"; 

export const LoginApi=(values)=>http.post("/api/v2/login",{
    username:values.username,
    password:values.password,
    captcha_code:values.captcha,
})

export const LoginApiCode=()=>http.post("/api/v1/captchas")

export const UserListApi=()=>http.get("/user/users/list")