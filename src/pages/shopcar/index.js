import React from "react";
import { ShopWrapper } from "./styled";
import { NavLink, Link } from "react-router-dom"
export default class ShopCar extends React.Component {
    constructor() {
        super()
        this.state = {
            xiala_box_show: false,
            flag: true,
            selectedAll: true,
            value: 1,
            num: 1,
            list: [],
            selectOne:true
        }
    }
    render() {
        let { xiala_box_show, flag, selectedAll, value, num, list,selectOne } = this.state;
        if (value < 1) { value = 1 }
        let msg = {};
        let sum = 0;

        if (this.props.location.state) {
            msg = this.props.location.state.msg.obj;
            msg.yes = true;
            msg.num = 1;
            sessionStorage.setItem("msg", JSON.stringify(msg));

            if (list.length == 0 && !(JSON.parse(sessionStorage.getItem("list")))) {
                list.push(JSON.parse(sessionStorage.getItem("msg")))
            } else {
                list = JSON.parse(sessionStorage.getItem("list"))
            }


            if (list.every((item) => {

                return msg.title != item.title
            })) {
                list.push(msg)
            }
            sessionStorage.setItem("list", JSON.stringify(list))
            list = (JSON.parse(sessionStorage.getItem("list")))
            console.log(list, 121)
            for (let h = 0; h < list.length; h++) {
                if (list[h].yes) {
                    sum += (list[h].num) * (list[h].price)
                }
            }

            if (list.every((item) => {

                return item.yes==true
            })&&selectedAll==true) {
               selectedAll=true
            }else if(selectedAll==true&&(list.every((item)=>{
                return item.yes==true
            }))){
                for(let i=0;i<list.length;i++){
                    list[i].yes=true;
                }
                selectedAll=true
            }else if(list.every((item)=>{
                return item.yes==false
            })&&selectedAll==false){
                for(let i=0;i<list.length;i++){
                    list[i].yes=list[i].yes;
                }
                selectedAll=false
                console.log(222)
            }else if(selectedAll==false){
                selectedAll=false;
                for(let i=0;i<list.length;i++){
                    list[i].yes=false;
                }
                selectedAll=false
            }else{
                selectedAll=false;
            }
           
        } else {

          
            msg = JSON.parse(sessionStorage.getItem("msg"))
            list = JSON.parse(sessionStorage.getItem("list"))
            if(!list){list=[]}

           
            if (list.every((item) => {

                return item.yes==true
            })&&selectedAll==true) {
               selectedAll=true
            }else if(selectedAll==true&&(list.every((item)=>{
                return item.yes==true
            }))){
                for(let i=0;i<list.length;i++){
                    list[i].yes=true;
                }
                selectedAll=true
            }else if(list.every((item)=>{
                return item.yes==false
            })&&selectedAll==false){
                for(let i=0;i<list.length;i++){
                    list[i].yes=list[i].yes;
                }
                selectedAll=false
                console.log(222)
            }else if(selectedAll==false){
                selectedAll=false;
                for(let i=0;i<list.length;i++){
                    list[i].yes=false;
                }
                selectedAll=false
            }else{
                selectedAll=false;
            }
            for (let h = 0; h < list.length; h++) {
                if (list[h].yes) {
                    sum += (list[h].num) * (list[h].price)
                }
            }
        }

        return (
            <ShopWrapper>
                <div className="topbar_fixed">
                    <div className="top-bar">
                        <NavLink to={"/detail"}>
                            <span className="iconfont" >{"\ue662"}</span>
                        </NavLink>
                        <p>购物车</p>
                        <span className="iconfont" onClick={this.handleXiaLaBox.bind(this, xiala_box_show)}>{"\ue66a"}</span>
                    </div>

                    <div className="xiala-box" style={{ display: xiala_box_show ? "block" : "none" }}>

                        <ul>
                            <NavLink to={"/home"}>
                                <li>
                                    <span className="iconfont">{"\ue611"}</span>
                                    <span>首页</span>
                                </li>
                            </NavLink>
                            <li>
                                <span className="iconfont">{"\ue60b"}</span>
                                <span>我的</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="shopcar_view">
                    {
                        list.map((item, index) => (
                            <div className="middleBox" key={index}>
                                <div className="center">
                                    <div className="content">
                                        <div className="sigleChoose">
                                            <input type="checkbox" checked={item.yes} onChange={this.handleGoodsChange.bind(this, index)} />
                                            {/*   //  :checked="item.flag" @change="handleGoodsChange(index)"*/}
                                        </div>
                                        <div className="imgContainer">
                                            <img src={item.img} />
                                        </div>
                                        <div className="txt">
                                            <div className="goodsName">{item.title}</div>
                                            <div className="colorName">货源: {item.merchant}</div>
                                            <div className="tags">
                                                <span>8.8折</span>
                                                <span>限量</span>
                                            </div>
                                            <div className="num">
                                                <div className="price">￥{item.price}</div>
                                                <div className="borderline">
                                                    <div className="leftDiv" onClick={this.handleNumSub.bind(this, index, list)}>-</div>

                                                    <input type="text" className="inputBox" value={item.num} onChange={this.handleNumChange.bind(this, index)} />

                                                    <div className="leftDiv" onClick={this.handleNumAdd.bind(this, index, list)}>+</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="del" onClick={this.handlDel.bind(this,index)}>删除</div>
                                    </div>
                                    
                                    <div className="bottomColor"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="bottom">
                    <div className="selectAll">
                        <input type="checkbox" checked={selectedAll} onChange={this.bottomSelected.bind(this)} />
                        {/*//  @click="bottomSeclected()"*/}
                        <span>全选</span>
                    </div>
                    <div className="priceArea">￥{sum}</div>
                    <div className="buy">去结算</div>
                </div>

            </ShopWrapper >
        )
    }

    handleNumSub(index) {

        let list = JSON.parse(sessionStorage.getItem("list"))

        --list[index].num
        if (list[index].num < 1) { list[index].num = 1 }
        sessionStorage.setItem("list", JSON.stringify(list))
        this.setState({
            list: list
        })
    }
    handleNumAdd(index) {
        let list = JSON.parse(sessionStorage.getItem("list"))

        ++list[index].num

        sessionStorage.setItem("list", JSON.stringify(list))
        this.setState({
            list: list
        })
    }
    handleGoodsChange(index) {
        let list = JSON.parse(sessionStorage.getItem("list"))
        list[index].yes = !list[index].yes;
        sessionStorage.setItem("list", JSON.stringify(list))
        this.setState({
            list: list,
            selectOne:!this.state.selectOne
        })
    }
    handlDel(index){
        let list = JSON.parse(sessionStorage.getItem("list"))
       list.splice(index,1)
        sessionStorage.setItem("list", JSON.stringify(list))
        this.setState({
            list: list,
            
        })
    }
    handleNumChange(index, e) {
        let val = e.target.value;
        let list = JSON.parse(sessionStorage.getItem("list"))
        list[index].num = Number(val)
        if (list[index].num < 1) { list[index].num = 1 }
        sessionStorage.setItem("list", JSON.stringify(list))
        this.setState({
            list: list
        })
    }
    bottomSelected() {

        this.setState({
            selectedAll: !this.state.selectedAll
        })
    }
    handleXiaLaBox(val) {
        this.setState({
            xiala_box_show: !val
        })
    }
}