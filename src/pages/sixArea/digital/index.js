import React from "react";
import Ads from "@common/ads";
import { NavLink,Link } from "react-router-dom";
import AdsSwiper from "./basketBallSwiper"
import { BasketballWrapper } from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
class Basketball extends React.Component {
    constructor() {
        super()
        this.state = {
            xiala_box_show: false,
            menu_block_arr1: [
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqshouji2.png", type: "手机" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqshoujipeijian2.png", type: "手机配件" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqdiannaozhuji2.png", type: "电脑主机" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqpinbandiannao2.png", type: "平板电脑" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqdiannaowaishe2.png", type: "电脑外设" },
            ],
            menu_block_arr2: [
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqdiannaowaishe2.png", type: "耳机" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqyinxiang2.png", type: "音响" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqsheyinshexiang2.png", type: "摄影摄像" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqzhinengchuandai2.png", type: "智能穿戴" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/zqgenduo2.png", type: "全部" },
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
                    src:"http://shihuo.hupucdn.com/article/201904/1515/3d7928ccc3f1b9ab144ba2879a7db3c3.png?imageView2/0/w/300/h/300/interlace/1",
                    name:"Aj34评测"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/201904/1216/640ad507423db938b5f60e4a5b5bbf97.png?imageView2/0/w/300/h/300/interlace/1",
                    name:"驭帅13评测"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-03/e923cce870bb67b4626e77ece19aff55.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"字母哥一代评测"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-02/6b3e693880a4948ae3344370aaaa4c0e.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"詹姆斯支线开箱"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-01/e57dd4ab29e93470f3433a4ee4596b2f.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"KT5评测"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-01/8dcdea05c31a671fa4a7928d39661785.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"LBJ联名开箱"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-12-01/db05524143bbcade8b9f13b5eeaeeb1d.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"Aj34评测"
                }
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
        let {channel_type,index1,arr_basketball, xiala_box_show, menu_block_arr1, menu_block_arr2, Basketball_autoplay,hot_list_ul } = this.state;
        let {digital_list} = this.props;
        if(!digital_list){digital_list=[]}
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
                    <p>数码专区</p>
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
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" />
                                </div>
                                <p className="p1">skullcandy骷髅头耳机</p>
                                <p className="p2">券后低至89元起</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg" />
                                </div>
                                <p className="p1">实战性价比之选</p>
                                <p className="p2">球星在线</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg" />
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
                        digital_list.map((item, index) => (
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
        this.props.handleDigital(this.state.channel_type);
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
            this.props.handleDigital(this.state.channel_type);
        }, 1);
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Basketball)