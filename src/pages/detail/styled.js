import styled from "styled-components";

export const Wrapper=styled.div`
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
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
      }
     
  }
  .topbar_fixed{
      position:fixed;
      width:100%;
      top:0;
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
      .img_container img{
          width:3.125rem;
          height:3.125rem;
      }
      .h2{
          width:3.125rem;
          padding:0.0417rem 0.0833rem 0 0.0833rem;
          height:0.2417rem;
          font-size:0.1333rem;
          color:#333;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
      }
      .h3{
          display:flex;
          width:3.125rem;
          padding:0 0.0833rem 0.0833rem 0.0833rem ;
         
          border-bottom:0.0817rem solid #f0f3f5;
         
          .t1{
              color:#666;
              font-size:0.1083rem;
              display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          text-overflow:ellipsis;
          overflow:hidden;
          }
      }
      .title{
          width:3.125rem;
          height:0.4042rem;
          padding:0.0833rem;
          color:#444;
          font-size:0.1583rem;
          font-weight:700;
      }
      .list-submenu{
    width:3.125rem;
    height:0.3167rem;
    padding-left: 0.065rem;
}
.kb_box div:last-child{
       padding-bottom:0.3083rem; 
}
.list-submenu ul{
    width:3rem;
    height:0.2167rem;
    display: flex;
    justify-content: space-around;
}
.list-submenu ul li{
    width:0.625rem;
    height:0.2167rem;
    background:#f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active2{
    background: #ff4338 !important;
    color:white;
}

.list{
    width:3.125rem;
    margin-left:0.0833rem;
    padding:0.1042rem 0;
    .head{
        width:3.0417rem;
        height:0.4625rem;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:0.2833rem;
            height:0.2833rem;
        }
    }
    .name_time{
        width:3.0417rem;
        height:0.4625rem;
        font-size:0.155rem;
        margin-left:0.125rem;
        margin-top:0.0933rem;
        p{
            color:#444;
        }
        .time{
            color:#999;
        }
    }
    .content{
        width:3.0417rem;
        height:100%;
        margin-top:0.0833rem;
        .text{
            color:#444;
            height:100%;
            font-size:0.1583rem;
        }
        .content_img{
            float:left;
            height:100%;
            img{
                float:left;
                width:0.9075rem;
                height:1.25rem;
                margin-right:0.0833rem;
            }
        }
    }
}
#bottom{
        width: 100%;
        height: 0.375rem;
        background: white;
        padding:0.0417rem 0rem 0.0417rem 0.0417rem;
        border-top:0.0083rem solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size:.36rem;
        position: fixed;
        left:0;
        bottom:0;
        z-index:2;
    }
    .service{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .service img {
        width:0.1834rem;
        height:0.1842rem;
    }
     .shopbag img{
        width:0.1834rem;
        height:0.1842rem;
    }
    .shopbag{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .addshop{
        width:1rem;
        height:0.375rem;
        background:rgb(26, 25, 30);
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
    .buy{
        width:1rem;
        height:0.375rem;
        background:#f8a120;
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
    #iconfontStyle{
        font-size:0.1833rem !important;
    }
`