import React from "react";
import Ads from "@common/ads";
import { NavLink,Link } from "react-router-dom";
import AdsSwiper from "./basketBallSwiper"
import { BasketballWrapper } from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
class Running extends React.Component {
    constructor() {
        super()
        this.state = {
            xiala_box_show: false,
            menu_block_arr1: [
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobuxie1.png", type: "跑步鞋" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobufuzhuang2.png", type: "跑步上装" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobuduanku1.png", type: "跑步下装" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png", type: "跑步配件" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobuyingyang2.png", type: "运动补给" },
            ],
            menu_block_arr2: [
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png", type: "JorDan" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png", type: "Adidas" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png", type: "Nike" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/ua.png", type: "UA" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png", type: "全部" },
            ],
            Basketball_autoplay: [
                <div className="basketball_lunbo">
                    <span>乔丹北斗科技芯</span>
                    <span >球鞋百科知多少</span>
                </div>,
                <div className="basketball_lunbo">
                    <span >为什么买AJ</span>
                    <span >AJ潮流效应</span>
                </div>,
                <div className="basketball_lunbo">
                    <span >编织横行时代</span>
                    <span >签名鞋Logo说</span>
                </div>,
                <div className="basketball_lunbo">
                    <span  >球鞋百科知多少</span>
                    <span >乔丹北斗科技芯</span>
                </div>,
                <div className="basketball_lunbo">
                    <span >为什么买AJ</span>
                    <span >AJ潮流效应</span>
                </div>,
            ],
            hot_list_ul:[
                {
                    src:"http://shihuo.hupucdn.com/article/2018-05-31/4a742d935267d38d4924dcf3654c9aee.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"户外跑鞋选购"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-13/2481e2a3d76b93bef576e7764ed41ea7.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"跑鞋要轻装上阵"
                },
                {
                    src:"http://shihuo.hupucdn.com/ucditor/20180126/400x400_35d6830055ab213520ac3f2dff03712e.jpeg?imageView2/0/w/300/h/300/interlace/1",
                    name:"跑步特卖场33"
                },
                {
                    src:"http://shihuo.hupucdn.com/ucditor/20171229/400x400_1847550160f9264d39924fb7ab2b3819.jpeg?imageView2/0/w/300/h/300/interlace/1",
                    name:"跑步特卖场31"
                },
                {
                    src:"http://shihuo.hupucdn.com/ucditor/20180225/450x450_3cdec4c542f110e93f3bf7623ec67a3b.jpeg?imageView2/0/w/300/h/300/interlace/1",
                    name:"精英跑者穿什么"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-03-19/08349f52e62ea3d1797a9f47b7b5c45b.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"绑带式鞋面如何"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-02-26/3177212425cf5352fa392649826730db.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"传统跑鞋调校之路"
                }
            ],
            arr_basketball: [
                { title: "全部", channel_type: "" },
                { title: "单品推荐", channel_type: "11" },
                { title: "达人清单", channel_type: "12" },
                { title: "达用户晒物", channel_type: "7" },
            ],
            index1:"",
            channel_type:""
        }
    }
    render() {
        let {index1,arr_basketball, xiala_box_show, menu_block_arr1, menu_block_arr2, Basketball_autoplay,hot_list_ul } = this.state;
        let {running_list} = this.props;
        console.log(running_list)
        if(!running_list){running_list=[]}
        return (
            <BasketballWrapper>
           <div  className="lunbostyle">
           <Ads/>
           </div> 
           <div className="topbar_fixed">
                <div className="top-bar">
                <NavLink to={"/home"}>
                    <span className="iconfont" >{"\ue662"}</span>
                    </NavLink>
                    <p>跑步专区</p>
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
                <div className="pageSports">
                    <div className="menu_block">
                        <ul>
                            {
                                menu_block_arr1.map((item, index) => (
                                    <li key={index}>
                                        <span>
                                            <img alt="" src={item.src} />
                                        </span>
                                        <div>{item.type}</div>
                                    </li>
                                ))
                            }

                        </ul>
                        <ul>
                            {
                                menu_block_arr2.map((item, index) => (
                                    <li key={index}>
                                        <span>
                                            <img alt="" src={item.src} />
                                        </span>
                                        <div>{item.type}</div>
                                    </li>
                                ))
                            }

                        </ul>
                        <div className="hotcarousel">
                            <AdsSwiper swiperItems={Basketball_autoplay} />

                        </div>
                    </div>
                </div>
                <div className="hot-activity">
                    <h2>热门活动</h2>
                    <ul>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201804/1310/87609edab6d859bb211b0243418109b5.jpg" />
                                </div>
                                <p className="p1">#什么跑鞋值得买#</p>
                                <p className="p2">晒晒你最爱的跑鞋</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201801/3117/dfb166bb32589d4c0c0f33613a7160cc.jpg" />
                                </div>
                                <p className="p1">装备微讯</p>
                                <p className="p2">2分钟懂你想要</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201803/2617/e6ae975eca6480b86354e92fa866a8e1.jpg" />
                                </div>
                                <p className="p1">跑步测频室</p>
                                <p className="p2">最炫酷的跑步装备评测</p>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="hot-list">
                    <div className="hot-list-div">
                        <h2>欲望清单</h2>
                        <h2>查看更多 ></h2>
                    </div>
                    <ul>
                    {
                        hot_list_ul.map((item,index)=>(
                            <li key={index} className="hot-list-li">
                            <span>
                                <div>
                                    <img alt="" src={item.src} />
                                </div>
                                <p className="p1-list">{item.name}</p>
                            </span>
                        </li>
                        ))
                    }
                       

                    </ul>
                </div>
                <div id="listview_basketball">
                <div className="list-view-top_basketball">
                    <div className="list-menu_basketball">
                        <ul className="nav_basketball">
                            {
                                arr_basketball.map((item, index) => (
                                    <li key={index} onClick={this.handleType.bind(this,item.channel_type,index)} style={{ borderBottom: index1 == index ? "3px solid #ff4338" : "" }} className={index1 == index ? "active_basketball" : ""}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                     <ul>
                     {
                        running_list.map((item, index) => (
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
                    
                </div>
                 
            </BasketballWrapper>
        )
    }
    componentDidMount(){
        this.props.handleRunning(this.state.channel_type);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
      
    }
    handleXiaLaBox(val) {
        this.setState({
            xiala_box_show: !val
        })
    }
    handleType(type,index){
        this.setState({
            channel_type:type,
            index1: index
        })
        
      this.timer=  setTimeout(() => {
            this.props.handleRunning(this.state.channel_type);
        }, 1);
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Running)