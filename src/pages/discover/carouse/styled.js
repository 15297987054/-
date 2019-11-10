import styled from "styled-components";
export const CarouseWrapper=styled.div`
    width:3.125rem;
    img{
        width:100%;
    }
    .sort{
        display :flex;
        justify-content:center;
        align-items:center;
        background:#f5f5f5;
        padding-bottom:0.0833rem;
        a{  
            padding:0.0833rem 0;
            background:white;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:25%;
            font-size:0.1rem;
            i{
                font-size:0.2rem;
            }
        }
    }
    .hottalk{
        background:white;
        h2{
            background:#fff;
            padding:0.0833rem;
            font-size:0.1167rem;
            color:#222;
            font-weight:normal;
        }
        div{
            
            padding-bottom:0.125rem;
            background:#fff;
            padding-left:0.0833rem;
            display:flex;
            position:relative;
            left:0;
            dl{
                flex-shrink:0;
                width:1.1rem;
                margin-right:0.0217rem;
                height:0.5rem;
                position:relative;   
                overflow:hidden;
                dd{
                    background-color: rgba(0,0,0,.2);
                    font-size:0.1083rem;
                    color:#ffffff;
                    width:100%;
                    height:0.4792rem;
                    padding:0 0.0833rem;
                    position:absolute;
                    top:0;
                    left :0;
                }
            }
            .hotmore{
                color:#999;
                margin-left:10px;
                width:0.2rem;
                padding:0.0417rem 0 0;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                p{
                   color:#999;
                   width:0.3rem;
                }
            }
           
        }
        .bgbottom{
            height: 10px;
            background:#f5f5f5;
        }

    }
`