import styled from "styled-components";
export const NewlistWrapper =styled.div`
    padding:0.0833rem 0 0 0.0833rem;
    ul{
        padding: 0.0833rem 0.0833rem 0.0833rem 0;
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid #f5f5f5;
       li:nth-of-type(1){
           width:0.8975rem;
           flex-shrink:0;
        img{
            width:100%;
            margin-bottom:0.0417rem;
        }
       }
        
        li:nth-of-type(2){
            font-size:0.1083rem;
            color:#333;
            margin-left:0.0625rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            p:nth-of-type(1){
                font-size:0.1167rem;
            }
            p:nth-of-type(2){
                height: 0.325rem;
                overflow:hidden;
            }
            p:nth-of-type(3){
                display:flex;
                align-items:center;
                i{
                   font-style:normal;
                }
                span{
                display:inline-block;
                width:0.1667rem;
                height:0.1667rem ;
                border-radius:100%;
                overflow:hidden;
                margin-right:0.0625rem;
                img{
                    width:0.1667rem;
                    height:0.1667rem ;
                    margin-bottom:0;  
                }
            }
            }
           
        }

    }
` 