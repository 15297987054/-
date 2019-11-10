import styled from "styled-components";
import logo from '@/static/logo.jpg';
export const LoginWrapper = styled.div`
    width:100%;
    height:100%;
    background:url(${logo}) no-repeat;
    background-size:100% 100%;
    display:flex;
    justify-content:center;
    align-items:center;
   
    .loginContainer{
        width:400px;
        height:400px;
        background:rgba(255,255,255,.3);
        padding:30px;
        .logo{
            width:100%;
            display:flex;
            justify-content:center;
            margin-bottom:30px;
            img{
            width:50px;
            height:50px;
            border-radius:30px;
        }
        } 
        .captcha_box{
            width:200px;
            margin-top:6px;
        }
    }
`