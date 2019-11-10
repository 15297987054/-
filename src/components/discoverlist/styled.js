import styled from "styled-components"
export const DiscoverlistWrapper=styled.div`
       height:100%;
     margin: 0 0.0817rem;
    .dislist{
        padding:0.0817rem 0;
       display:flex; 
       justify-content:space-between;
       border-bottom:1px solid #a79f9f;
       div:nth-of-type(1){
            width:0.2833rem;
            height: 0.2583rem;
            border-radius:100%;
            overflow:hidden;
           img{
              width:0.2833rem;
           }
       }
        dl{
            width:100%;
           margin-left:0.0625rem;
            dt{
                font-size:0.1542rem;
                height:0.2292rem;
                line-height:0.2292rem;
            }
            dd:nth-of-type(1){
                font-size:0.1458rem;
                height:0.2167rem;
                line-height:0.2167rem;
                color:#777;
            }
            dd:nth-of-type(2){
                font-size:0.125rem;
            }
            dd:nth-of-type(3){
                img{
                    width:100%;
                    margin:0.0833rem 0 0.16rem;
                }
            }
            dd:nth-of-type(4){
                i:nth-of-type(2){
                    font-size:0.1625rem;
                    margin-right:0.0417rem;
                }
                i{
                    font-size:0.125rem;
                    color:#a4a4a4;
                }
                span{
                    font-size:0.125rem;
                    margin-right:0.0833rem
                }
            }
        }
       
    }
`