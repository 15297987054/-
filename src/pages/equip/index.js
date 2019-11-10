import React, { Component } from "react";
import { Wrapper } from "./styled"
import Ads from "../../common/ads"
import {connect} from "react-redux"
import {Link,NavLink} from 'react-router-dom'
import {mapStateToProps,mapDispatchToProps} from "./connect"
class Equip extends Component {
    constructor() {
        super();
        this.state = {
            arr: ["篮球鞋", "篮球服饰", "篮球挂件", "篮球", "nike", "adidas", "jordan", "全部"],
            xiala_box_show:false
        }
    }
    render() {
        let { arr,xiala_box_show } = this.state;
        let {equip_list} =this.props;
        console.log(equip_list)
        return (
            <Wrapper>
                <Ads />
                <div className="searchBox_equip">
                    <div className="search">
                        <input type="text" placeholder="搜索商品、品牌" />
                        <span className="iconfont" id="icon" onClick={this.handleXiaLaBox.bind(this, xiala_box_show)}>{"\ue66a"}</span>
                    </div>
                    
                   
                    <div className="xiala-box-equip" style={{ display: xiala_box_show ? "block" : "none" }}>
                   
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
                <div className="menu-area">
                    <ul>
                        <li>
                            <span className="iconfont">{"\ue773"}</span>
                            <p>热销排行</p>
                        </li>
                        <li>
                            <span className="iconfont">{"\ue606"}</span>
                            <p>好价精选</p>
                        </li>
                        <li>
                            <span className="iconfont">{"\ue807"}</span>
                            <p>当季新款</p>
                        </li>
                    </ul>
                </div>
                <div className="banner_area">
                    <img alt="" src="http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1" />
                    <div className="banner_txt">
                        <div className="h2">
                            <span>篮球BASKETBALL</span>
                            <img alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />

                        </div>
                        <div className="t1">Aj34评测</div>
                    </div>
                    <img className="left_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
                    <img className="right_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
                    <div className="tag_area">
                        <ul>
                            {
                                arr.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="banner_area">
                <img alt="" src="http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1" />
                <div className="banner_txt">
                    <div className="h2">
                        <span>篮球BASKETBALL</span>
                        <img alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />

                    </div>
                    <div className="t1">Aj34评测</div>
                </div>
                <img className="left_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
                <img className="right_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
                <div className="tag_area">
                    <ul>
                        {
                            arr.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="banner_area">
                    <img alt="" src="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1" />
                    <div className="banner_txt">
                        <div className="h2">
                            <span>篮球BASKETBALL</span>
                            <img alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />

                        </div>
                        <div className="t1">Aj34评测</div>
                    </div>
                    <img className="left_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
                    <img className="right_img" alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
                    <div className="tag_area">
                        <ul>
                            {
                                arr.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>


                <ul className="equip_ul">
                {
                   equip_list.map((item, index) => (
                       <Link to={{pathname:"/detail",state:{obj:{item}}}} key={index}>
                       <li>
                           <span className="Haden">
                               <div className="Haden-img">
                                   <img alt="" src={item.data.img ? item.data.img : item.data.img_attr[0]} />
                               </div>
                               <div className="Haden-right">
                                   <h2>{item.data.title}</h2>
                                   <div className="detail">
                                       <img style={{ display: item.data.subtitle ? "none" : "block" }} alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" />
                                       <span id="text-ellispis" style={{ color: item.data.subtitle ? "#ff4338" : "#666", fontSize: item.data.subtitle ? "0.125rem" : "0.1083rem" }} >{item.data.subtitle ? item.data.subtitle : item.data.intro ? item.data.intro :item.data.author_name}</span>
                                       <img style={{ display: item.data.subtitle ? "none" : "block" }} alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" />
                                   </div>
                                   <div className="detail">
                                       <span className="detail-span">{item.data.merchant}</span>
                                       <span className="detail-span1">{item.data.price ? '￥' + item.data.price : ""}</span>
                                       <span className="detail-span2">
                                           <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/look.png"/>
                                           <span>{item.data.hits}</span>
                                       </span>
                                   </div>
                               </div>
                           </span>
                       </li>
                       </Link>
                   ))
               }
                </ul>    
            </Wrapper>
        )
    }
    componentDidMount(){
        this.props.handleEquip();
    }
    handleXiaLaBox(val) {
        this.setState({
            xiala_box_show: !val
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Equip)