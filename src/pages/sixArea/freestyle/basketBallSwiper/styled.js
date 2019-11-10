import styled from "styled-components";
export const SwiperContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    .swiper-content{
        /* display:flex; */
        position:absolute;
        
        top:0;
        transition:top .2s ease-in-out;
        div{
            height:0.3333rem;
            z-index:2;
            width:2.25rem;
                    height:0.3333rem; 
                    display:flex;  
                     /* flex-wrap:wrap;  */
                     /* flex-direction:column;  */
                    justify-content:center; 
                     align-items:center;
                    font-size:0.11rem;
                    span:nth-of-type(2){
                        margin-left:0.125rem;
                    }
                
        }
    }
   
   

`