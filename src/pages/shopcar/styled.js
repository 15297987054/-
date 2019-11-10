import styled from "styled-components";

export const ShopWrapper = styled.div`
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


      
.middleBox:nth-of-type(1){
  margin-top:0.375rem;
}
.center {
  width: 100%;
  height: 1.0rem;
  overflow: hidden;
}
.content {
  width: 3rem;
  height: 1.1191rem;
  color: black;
  overflow:hidden;
  display: flex;
  align-items: center;
  overflow-x:scroll;
  white-space: nowrap;
  vertical-align:top;
  overflow-y:hidden;
}
.del{
  width:0.25rem;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:0.125rem;
  background:rgba(0,0,0,0.7);
}
.sigleChoose {
  width: 0.3333rem;
  height: 1.3333rem;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 0.125rem;
}
.imgContainer img {
  width: 0.9167rem;
  height: 0.9167rem;
  background: #ccc;
  margin-left: 0.0833rem;
  margin-right: 0.0533rem;
}
.txt {
  width: 1.7917rem;
  height: 0.9167rem;
}
.goodsName {
  width: 1.7917rem;
  height: 0.1417rem;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}
.introduce {
  width: 1.7917rem;
  height: 0.1417rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.colorName {
  width: 1.7917rem;
  height: 0.1417rem;
}
.tags {
  width: 1.7917rem;
  height: 0.125rem;
  margin-top: 0.0417rem;
  margin-bottom: 0.0917rem;
}
.tags span {
  padding-left: 0.025rem;
  padding-right: 0.025rem;
  margin-right: 0.0417rem;
  background-color: #f8a120;
}
.price {
  font-size: 0.1417rem;
  color: #ff4338;
  margin-right: 0.3333rem;
  font-weight:800;
}
.num {
  display: flex;
  height: 0.2083rem;
  /* justify-content: space-between; */
}
.borderline {
  width: 0.7667rem;
  height: 0.2083rem;
  display: flex;
  border: solid 0.0042rem #ccc;
}
.leftDiv {
  width: 0.1917rem;
  height: 0.1917rem;
  line-height: 0.1917rem;
  background: white;
  text-align: center;
}
.inputBox {
  width: 0.3333rem;
  height: 0.1917rem;
  border: none;
  text-align: center;
  margin: 0;
}
.bottomColor {
  width: 100%;
  height: 0.1267rem;
  background: #ccc;
}
.bottom {
  width: 100%;
  height: 0.4167rem;
  position: fixed;
  bottom: 0;
  background: yellow;
  display: flex;
}
.selectAll {
  width: 0.4167rem;
  height: 0.4167rem;
  padding-left: 0.0958rem;
  padding-right: 0.0958rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.priceArea {
  width: 1.5667rem;
  height: 0.4167rem;
  padding-right: 0.0833rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.125rem;
  align-items: center;
  font-size: 0.1817rem;
  color:#ff4338;
  font-weight:900;
}
.buy {
  width: 1.0833rem;
  height: 0.4167rem;
  background: rgb(209, 16, 16);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 0.15rem;
}
`