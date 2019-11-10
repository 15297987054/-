import React from "react";
import Ads from "@common/ads";
import { NavLink ,Link} from "react-router-dom";
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
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/xiuxianxielv2.png", type: "鞋类" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/xiuxianweiyi.png", type: "服装" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png", type: "手表" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/xiuxianbaolei3.png", type: "包类" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/erji1.png", type: "耳机" },
            ],
            menu_block_arr2: [
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png", type: "JorDan" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png", type: "Adidas" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png", type: "Nike" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/ua.png", type: "UA" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png", type: "全部" },
            ],
            hot_list_ul:[
                {
                    src:"http://shihuo.hupucdn.com/article/2017-06-22/d837ef823d047b77aed0fdcb57d0d7d2.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"夏日怎么选白T"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2017-12-08/04e63861695c1621e8e5775ed68a3355.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"年度鞋款回顾"
                },
                {
                    src:"http://shihuo.hupucdn.com/column/201708/0311/d1ff66cb21a58a0a186e0184aa6ef30b.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"夏日百搭神裤企划"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2017-10-21/f1281f9c92d5e90d06ca07b58c4b8a08.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"当法兰西邂逅户外"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/201706/1215/a35646209419dc1bf81eb75ecf340323.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"穿搭课堂第六期"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2017-01-13/03ac31ad0cba1bdd8606b99d54b98363.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"余文乐上脚"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2017-06-07/44cf62dfde5e7917ca690867f22d7281.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"穿搭"
                }
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
            
            arr_basketball: [
                { title: "全部", channel_type: "" },
                { title: "单品推荐", channel_type: "11" },
                { title: "达人清单", channel_type: "12" },
                { title: "用户晒物", channel_type: "7" },
            ],
            index1:"",
            channel_type:""
        }
    }
    render() {
        let {index1,arr_basketball, xiala_box_show, menu_block_arr1, menu_block_arr2, Basketball_autoplay,hot_list_ul } = this.state;
        let {freestyle_list} = this.props;
        if(!freestyle_list){freestyle_list=[]}
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
                    <p>潮流专区</p>
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
                                <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/2310/18c66c0697e87440978ffdc220ee7cf9.jpg" />
                            </div>
                            <p className="p1">skullcandy骷髅头耳机</p>
                            <p className="p2">券后低至89元起</p>
                        </span>
                    </li>
                    <li className="hot-activity-li">
                        <span>
                            <div>
                                <img alt="" src="http://shihuo.hupucdn.com/appZone/201812/0411/965ca32793c9a42a11c0de32465d9a64.jpg" />
                            </div>
                            <p className="p1">实战性价比之选</p>
                            <p className="p2">球星在线</p>
                        </span>
                    </li>
                    <li className="hot-activity-li">
                        <span>
                            <div>
                                <img alt="" src="http://shihuo.hupucdn.com/appZone/201812/0411/e8dd17f83bc977f0d7014a077ed9d821.jpg" />
                            </div>
                            <p className="p1">花鸟市场行</p>
                            <p className="p2">今天穿这样</p>
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
                        freestyle_list.map((item, index) => (
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
        this.props.handleFreestyle(this.state.channel_type);
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
            this.props.handleFreestyle(this.state.channel_type);
        }, 1);
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Running)