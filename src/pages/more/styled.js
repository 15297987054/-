import styled,{keyframes} from "styled-components";

export const HeadBanner = styled.div`
    width:3.125rem;
    
    &>div{
        width:3.125rem;
        height:1.25rem;
        background-size:100% auto;
        padding-top:0.5833rem;
        padding-left:0.2083rem;
        float:left;
        .img-face{
            img{
                width:0.4167rem;
                height:0.4167rem;
                float:left;
            }
        }
            .sign{
                float:left;
                width:2.1333rem;
                height:0.3792rem;
                color:white;
                padding-top:0.0717rem;
                padding-left:0.125rem;
                span{
                    margin-right:0.0833rem;
                    font-size:0.125rem;
                }
                p{
                    margin-top:0.0417rem;
                    font-size:0.11rem;
                }
            }
        }
    .my-shihuo{
        width:100%;
        height:0.9167rem;
        padding:0.0625rem;
        margin-bottom:0.0833rem;
        border-bottom:0.0417rem solid #f7f7f7;
      .my-shihuo-ul{
        display:flex;
      }
        .tit{
            font-size:0.1167rem;
            color:#333;
        }
        .my-shihuo-nav{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width:0.75rem;
            height:0.6125rem;
            margin-top:0.0833rem;
            margin-bottom:0.0833rem;
            .iconfont{
                font-size:0.2541rem;
             }
        }
        
        
    }
       
    
    
`
