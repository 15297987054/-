import styled from "styled-components";

export const LoginWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:.5rem;
    padding:.15rem;
    .login-form{
        width:100%;
    }
    .logoImg img{
        width:0.4083rem;
        height:0.4083rem;
        border-radius:0.2042rem;
    }
    #login{
        display:flex;
        flex-direction:column;
    }
    label{
        font-size:.15rem;
        display:flex;
        align-items:center;
        margin-top:.15rem;
        span{
            display:block;
            min-width:.5rem;
            text-align:center;
        }
    }
    .userInfo{
        font-size:.12rem;
        height:.4rem;
        line-height:.4rem;
        padding-left:.1rem;
    }
    input{
        width:70%;
        height:.25rem;
        border:0;
        border-bottom:1px solid #ededed;
        font-size:.15rem;
        outline:none;
    }
    button{
        width:100%;
        height:.4rem;
        border:0;
        background:#333;
        color:#fff;
        font-size:.15rem;
        margin-top:.15rem;
    }
`