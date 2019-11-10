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
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/jianshenzhuangbei.png", type: "健身装备" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/jianshenyongping1.png", type: "健身用品" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/yingyangbuji.png", type: "营养补剂" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/all1.png", type: "全部商品" },
                { src: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png", type: "健身配件" },
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
                    src:"http://shihuo.hupucdn.com/article/2018-08-13/4ab878080dbf8a851ffc2b041be9b369.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"战斗绳狂塑"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-08-08/609fba167a3539e9f086c5edaa06e843.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"放松加强20分"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-06-29/da58b58c181267a710f42e3a0f060659.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"肩部保养"
                },
                {
                    src:"http://shihuo.hupucdn.com/ucditor/20171229/400x400_1847550160f9264d39924fb7ab2b3819.jpeg?imageView2/0/w/300/h/300/interlace/1",
                    name:"跑步特卖场31"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-06-28/e2f11fbfd998c64116a44e181edf6b98.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"给你的训练做减法"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-05-21/3672b3597630ae73b872f4d010c3ba67.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"视觉味觉双重享受"
                },
                {
                    src:"http://shihuo.hupucdn.com/article/2018-05-10/e33c7ca44d531483b956a8929c20fbc0.jpg?imageView2/0/w/300/h/300/interlace/1",
                    name:"压缩衣？紧身衣？"
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
        let {hit_list} = this.props;
        console.log(hit_list)
        if(!hit_list){hit_list=[]}
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
                    <p>健身专区</p>
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
                        
                        <div className="hotcarousel">
                            <AdsSwiper swiperItems={Basketball_autoplay} />

                        </div>
                    </div>
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
                        hit_list.map((item, index) => (
                            <Link to={{pathname:"/detail",state:{obj:{item}}}} key={index}>
                            <li >
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
        this.props.handleHit(this.state.channel_type);
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
            this.props.handleHit(this.state.channel_type);
        }, 1);
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Running)