import styled from "styled-components";

export const Wrapper=styled.div`
    .searchBox_equip{
    width:100%;
    height:0.3833rem;
   
    background:#ebebeb;
    display: flex;
   
}
.search{
    width:100%;
    padding-left:0.0833rem;
    display: flex;
    justify-content:center;
    align-items:center;
}
.search input{
    width:2.4208rem;
    height:0.2583rem;
    margin-top:0.0625rem;
    margin-bottom:0.0625rem;
    padding-left:0.1667rem;
    border:none;
    background: white;
    border-radius: 0.0625rem;
}
.xiala-box-equip{
          width:1rem;
          height:0.75rem;
          background: rgba(0,0,0,0.7);
          position:absolute;
          top:0.75rem;
          left:2.09167rem;
          div{
              width:0;
              height:0;
              border-style:solid;
              border-width:0.0417rem;
              border-color:transparent transparent rgba(0,0,0,0.7) transparent;
              position:absolute;
              left:0.775rem;
              top:-0.08rem;
          }
          ul{
              width:1rem;
              height:0.7542rem;
              padding:0.0417rem;
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
              li{
                  width:100%;
                  height:48%;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  color:white;
                  span:nth-of-type(1){
                      font-size:0.1967rem
                  }
                  span:nth-of-type(2){
                      margin-left:0.0817rem;
                      font-size:0.1167rem;
                  }
              }
          }
      }
      #icon{
    line-height: 0.375rem;
    font-size:0.3083rem;
    margin-left:0.0833rem;
}
.menu-area{
    width:3.125rem;
    height:0.6292rem;
   ul{
       width:100%;
       height:100%;
       display:flex;
       justify-content:space-around;
        align-items:center;
        li{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            span{
                font-size:0.1667rem;
                margin-bottom:0.0833rem;
            }
            p{
                font-size:0.125rem;
            }
        }
   }
}
.banner_area{
    width:100%;
    height:1.625rem;
    position:relative;
    margin-bottom:0.7292rem;
    img{
        width:100%;
        height:100%;
    }
    .h2{
        font-size:0.2083rem;
        font-weight:2.9167rem;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
       span{
           position:absolute;
           top:0.2083rem;
           
       }
        img{
            width:0.2083rem;
            height:0.2083rem;
            position:absolute;
            top:0.2083rem;
            left:2.3292rem;
        }
    }
    .t1{
        position:absolute;
        font-size:0.125rem;
        top:0.45rem;
        color:white;
        left:43%;

    }
    .left_img{
        position:absolute;
        top:0.3083rem;
        left:0.2633rem;
            width:0.1958rem;
            height:1rem;
    }
    .right_img{
        position:absolute;
        top:0.3083rem;
        right:0.1633rem;
            width:0.1958rem;
            height:1rem;
    }
}
.tag_area{
    width:100%;
    height:0.7667rem;
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            font-size:0.1167rem;
            display:flex;
            justify-content:center;
            align-items:center;
            width:0.7792rem;
            height:0.3833rem;
        }
    }
}
.Haden{
    display: flex;
    justify-content: center;
    width:3.0417rem;
    height:1.0042rem;
    padding:0.0833rem 0.0833rem 0.0833rem 0;
    border-bottom: 1px solid #e6e6e6;
}
.Haden-img img{
    width:0.8875rem;
    height:0.8875rem;
}
.Haden-right{
    width:2.0333rem;
    height:0.9375rem;
    margin-left:0.0833rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.Haden-right h2{
    font-size: 0.1167rem;
    color:#666;
}
.face{
    display: flex;
    align-items: center;
}
.face img{
    width:0.1667rem;
    height:0.1667rem;
    border-radius: 0.1667rem;
    margin-right:0.0833rem;
}
.face-span{
    width:0.5167rem;
    height:0.125rem;
    padding:0 0.0417rem;
    margin-right:0.0417rem;
    border:1px solid #a8a8a8;
    color:#999;
    font-size: 0.0417rem;
    line-height: 0.125rem;
}
.detail{
    display: flex;
    align-items: center;
    color:#666;
    font-size: 0.1083rem;
}
.detail img{
    width:0.075rem;
    height:0.075rem;
    margin:0 0.0417rem;
}
#text-ellispis{
    align-items: center;
    
    padding:0 0.0417rem;
    color:#999;
    font-size: 0.05rem;
    line-height: 0.125rem;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 2;
    overflow: hidden; 
}
.detail-span{
    height:0.125rem;
    width:0.3083rem;
    padding:0 0.0417rem;
    color:#999;
    font-size: 0.05rem;
    line-height: 0.125rem;
    text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.detail-span1{
    color:#ff4338;
    margin-right:0.4167rem;
}
.detail-span2{
    display:flex;
    justify-content:center;
    align-items:center;
}
.equip_ul{
    padding-bottom:0.4267rem;
}
`