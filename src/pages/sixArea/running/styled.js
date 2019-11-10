import styled from "styled-components";

export const BasketballWrapper = styled.div`
  width:100%;  
  .top-bar{
      position:relative;
      width:100%;
      height:0.375rem;
      background:#f7f7f7;
      padding:0.0917rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      span{
          width:0.325rem;
          height:0.325rem;
          font-size:0.2583rem;
          color:#444;
          display:flex;
      justify-content:center;
      align-items:center;
      }
      p{
          color:#333;
          font-size:0.1583rem;
          font-weight:bolder;
      }
     
  }
  .topbar_fixed{
      position:fixed;
      width:100%;
      top:0;
      z-index:5;
  }
  .xiala-box{
          width:1rem;
          height:0.75rem;
          background: rgba(0,0,0,0.7);
          position:absolute;
          top:0.375rem;
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
      .pageSports{
         width:100%;
         margin-top:0.375rem;
         .menu_block{
             width:100%;
             padding:0 0.0625rem;
             height:1.6375rem;
             margin-bottom:0.0833rem;
             ul{
                 width:3rem;
                 height:0.6667rem;
                 padding: 0.0625rem 0;
                 display:flex;
                 justify-content:center;
                 align-items:center;
                 li{
                     display:flex;
                     flex-direction:column;
                     justify-content:center;
                     align-items:center;
                     font-size:0.1rem;
                     img{
                         width:0.6rem;
                         height:0.3583rem;
                     }
                 }
             }
             .hotcarousel{
                 width:100%;
                 height:0.3333rem;
                 padding-left:0.75rem;
                 background:url("//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/index/hottest_32eac13.jpg") .1rem center no-repeat;
                 background-size:0.75rem 0.15333rem;
                
            }
         }
      }
      .hot-activity{
    width:100%;
    height:1.1834rem;
    margin-top:0.025rem;
    margin-bottom:0.0458rem;
}
.hot-activity h2{
    width:3.125rem;
    padding-left:0.125rem;
    padding-right:0.125rem;
    padding-top:0.0833rem;
    padding-bottom:0.0833rem;
    margin-bottom:0.0417rem;
    font-size: 0.1167rem;
    color:#444;
}
.hot-activity ul{
    width:3.125rem;
    padding-left:0.125rem;
    padding-right:0.125rem;
    height:1.0166rem;
}
.hot-activity-li{
    width:0.9333rem;
    height:0.85rem;
    margin-right:0.0333rem;
    margin-bottom: 0.1042rem;
    float:left;
}
.hot-activity li:nth-of-type(3n){
    margin-right:0;
}
.hot-activity-li div{
    height:0.5583rem;
    margin-bottom: 0.0417rem;
}
.hot-activity-li img{
    width:0.9333rem;
    height:0.5583rem;
}
.p1{
    width:0.9333rem;
    height:0.125rem;
    font-size: 0.1rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.p2{
    color:#666;
    transform: scale(0.83333)
}
.hot-list-div{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h2{
        
        padding:0.125rem 40.992px 0.125rem 0 ;
        margin-bottom:0.0417rem;
        font-size: 0.1167rem;
        color:#444;
    }
}
.hot-list{
    padding-left:0.1667rem;
    height:1.51rem;
    overflow-y:hidden;
    ul{
        /* float:left; */
        height:1.52rem;
        overflow-x:scroll;
       
        white-space: nowrap;
        vertical-align:top;
        .hot-list-li{
            margin-right:0.0833rem;
           
            display: inline-block;
            img{
                width:0.8rem;
                height:0.8rem;
                margin-bottom:0.0417rem;
            }
    }
    }
}
#listview_basketball{
    width:100%;
    border-top:0.05rem solid #e6e6e6;
    padding-bottom:0.5083rem;
}

.list-view-top_basketball{
    width:100%;
}
.list-menu_basketball{
    width:3.125rem;
    padding-left:0.2083rem;
    padding-right:0.2083rem;
}
.nav_basketball{
    width:2.7083rem;
    height:0.3333rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.1083rem;
    color:#666666;
    align-items: center;
}
.nav_basketball li{
    height:0.2333rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active_basketball{
    color:#ff4338;
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
.lunbostyle{
    position:fixed !important;
    bottom:0;
    z-index:3;
    width:100%;
}
`