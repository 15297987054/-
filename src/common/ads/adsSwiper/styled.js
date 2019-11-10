import styled from "styled-components";
export const SwiperContainer = styled.div`
    width:100%;
    min-height:0.375rem;
    position:relative;
    overflow:hidden;
    .swiper-content{
        display:flex;
        position:absolute;
        left:0;
        transition:left .2s ease-in-out;
    }
    .swiper-spot{
        width:100%;
        display:flex;
        justify-content:center;
        position:absolute;
        bottom:0.0084rem;
        div{
            width:0.1059rem;
            height:0.0209rem;
            background:#fff;
            border-radius:30%;
            margin:0.0417rem;
           
        }
        .active{
            background:#c33;
        }
    }

`