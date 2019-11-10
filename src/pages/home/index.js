import React from "react";
import Ads from "../../common/ads";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Swiper from "@lib/swiper";
import Bscroll from "@common/bscroll"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import "./index.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{ title: "推荐", type: "" },
            { title: "篮球", type: "basketball" },
            { title: "跑步", type: "running" },
            { title: "健身", type: "fitness" },
            { title: "潮流", type: "freestyle" },
            ],
            arrListSubMune: [
                { subname: "全部", channel_type: "" },
                { subname: "单品推荐", channel_type: "11" },
                { subname: "原创精选", channel_type: "12" },
                { subname: "用户晒物", channel_type: "7" },
            ],
            index1: "",
            index2: "",
            type: "",
            channel_type: "",
            home_autoplay: [
                {
                    imgUrl: "http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1"
                },
                {
                    imgUrl: "http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1"
                },
                {
                    imgUrl: "http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1"
                },
                {
                    imgUrl: "http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1"
                },
                {
                    imgUrl: "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1"
                },
            ]
        }
    }
    render() {
        let { arr, index1, arrListSubMune, index2, home_autoplay, type, channel_type } = this.state;
        let { home_goodsList } = this.props;
        let home_face = [];

        let rest_goodlist = [];
        if (!home_goodsList) { home_goodsList = [] };
        if (home_goodsList && home_goodsList.length >= 1) { rest_goodlist = home_goodsList.splice(2, 21) }
        if (home_goodsList && home_goodsList.length >= 1) { home_face.push(home_goodsList[0]) }

        return (
            <div className="outside-box">
                <Ads style={{ display: "none" }} />

                <div className="bannerimg">
                    <Swiper swiperItems={home_autoplay} />
                    <div className="searchBox">
                        <Link to={"./search"}>
                            <div className="search">
                                <input type="text" placeholder="搜索商品、品牌" />
                            </div>
                        </Link>
                        <NavLink to={"/beforeLogin"}>
                            <i className="iconfont" id="icon">{"\ue60b"}</i>
                        </NavLink>
                    </div>
                </div>
                <div className="pic-banner">
                    <ul>
                        <NavLink to={"/basketball"} style={{ color: "#333" }}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>篮球</h2>
                                        <p>纯白系列秒杀</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to={"/running"}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>跑步</h2>
                                        <p>女王节快乐</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to={"/hit"}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>健身</h2>
                                        <p>布瑞特装备秒杀</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuo.hupucdn.com/def/20170915/0446a5d97bf800d5322341aab554035d1505460763.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to={"/football"}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>足球</h2>
                                        <p>其实是在吹总裁</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuo.hupucdn.com/trade/reposition/2017-09-13/6f2b59787e5a18c4dca091ce9ecb4fae.png?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to={"/freestyle"}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>潮流</h2>
                                        <p>78元短袖秒杀</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to={"/digital"}>
                            <li className="pic-banner-li">
                                <span>
                                    <div className="tit">
                                        <h2>数码</h2>
                                        <p>连接下一个未来</p>
                                    </div>
                                    <div className="pic">
                                        <img alt="" src="http://shihuo.hupucdn.com/appZone/201710/1317/749c6c723b3029420783d6358d19799c.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                    </div>
                                </span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="discount">
                    <ul>
                        <NavLink to={"/discount"}>
                            <li className="discount-li">
                                <h2>今日优惠</h2>
                                <p className="discount-li-p">EQT 5折好价</p>
                                <p className="imgs">
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1" />
                                </p>
                            </li>
                        </NavLink>
                        <li className="discount-li">
                            <h2>限时团购</h2>
                            <p className="discount-li-p">春节不打烊</p>
                            <p className="imgs">
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1" />
                            </p>
                        </li>
                        <li className="discount-li">
                            <h2>免费抽奖</h2>
                            <p className="discount-li-p">识货抽奖 天天免费</p>
                            <p className="imgs">
                                <img alt="" src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1" />
                            </p>
                        </li>
                    </ul>
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
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/1019/7e5b5b66171686cf805178be1c793bf0.jpg" />
                                </div>
                                <p className="p1">虎扑优选精选篮球袜</p>
                                <p className="p2">低至6.9元</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/2311/e5e9c867a2016694abe40d752c81080a.jpg" />
                                </div>
                                <p className="p1">应季机能风</p>
                                <p className="p2">酷战雨雪</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201805/1414/c5f797407c24e87cb7648abc937e9955.jpg" />
                                </div>
                                <p className="p1">热门资讯</p>
                                <p className="p2">最新最热门的数码资讯</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div id="listview">
                    <div className="list-view-top">
                        <div className="list-menu">
                            <ul className="nav">
                                {
                                    arr.map((item, index) => (
                                        <li key={index} onClick={this.handleType.bind(this, item.type, index)} style={{ borderBottom: index1 == index ? "3px solid #ff4338" : "" }} className={index1 == index ? "active" : ""}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="list-submenu">
                        <ul>
                            {
                                arrListSubMune.map((item, index) => (
                                    <li key={index} onClick={this.handleChannelType.bind(this, item.channel_type, index)} className={index2 == index ? "active2" : ""}>{item.subname}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>


                <div className="list-view">
                    <Bscroll ref="bscroll">
                        <ul className="list-view-ul">
                            {
                                home_face.map((item, index) => (
                                    <li key={index}>
                                        <span className="Haden">
                                            <div className="Haden-img">
                                                <img alt="" src={item.data.img ? item.data.img : item.data.img_attr[0]} />
                                            </div>
                                            <div className="Haden-right">
                                                <h2>{item.data.title}</h2>
                                                <div className="face">
                                                    <img alt="" src={item.data.avatar} />
                                                    <span style={{ color: "#666" }}>{item.data.author_name ? item.data.author_name : item.data.intro}</span>
                                                </div>
                                                <div className="face">
                                                    <span className="face-span">最新鞋报</span>
                                                </div>
                                            </div>
                                        </span>
                                    </li>
                                ))
                            }
                            {/* {
                                home_otherone.map((item, index) => (
                                    <li key={index}>
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
                                                    <span className="detail-span1" style={{ display: item.data.price ? "none" : "block" }}>{item.data.price}</span>
                                                </div>
                                            </div>
                                        </span>
                                    </li>
                                ))
                            }*/}

                            {/*<li>
                                <div className="bottom-list">
                                    <p>今日优惠</p>
                                    <div className="imgbox">
                                        <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2212/2d1950ee1be7525733661e44d880a767.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                        <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2213/8e1230ca01303ee2c3dc7bae0db9aa79.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                        <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2216/ec722a6eb9cd0fe6369cff592941cfb8.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                    </div>
                                </div>
                        </li>*/}
                            {
                                rest_goodlist.map((item, index) => (
                                    <Link to={{ pathname: "/detail", state: { obj: { item } } }} key={index}>
                                        <li>
                                            <span className="Haden">
                                                <div className="Haden-img">
                                                    <img alt="" src={item.data.img ? item.data.img : item.data.img_attr[0]} />
                                                </div>
                                                <div className="Haden-right">
                                                    <h2>{item.data.title}</h2>
                                                    <div className="detail">
                                                        <img style={{ display: item.data.subtitle ? "none" : "block" }} alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" />
                                                        <span id="text-ellispis" style={{ color: item.data.subtitle ? "#ff4338" : "#666", fontSize: item.data.subtitle ? "0.125rem" : "0.1083rem" }} >{item.data.subtitle ? item.data.subtitle : item.data.intro ? item.data.intro : item.data.author_name}</span>
                                                        <img style={{ display: item.data.subtitle ? "none" : "block" }} alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" />
                                                    </div>
                                                    <div className="detail">
                                                        <span className="detail-span">{item.data.merchant}</span>
                                                        <span className="detail-span1">{item.data.price ? '￥' + item.data.price : ""}</span>
                                                    </div>
                                                </div>
                                            </span>
                                        </li>
                                    </Link>
                                ))
                            }

                        </ul>
                    </Bscroll>
                </div>



            </div>

        )
    }

    handleType(val, index) {
        this.setState({
            type: val,
            index1: index
        })
        this.timer1 = setTimeout(() => {
            this.props.handleHomeList(this.state.type, this.state.channel_type)
        }, 1)

    }
    handleChannelType(val, index) {
        this.setState({
            channel_type: val,
            index2: index
        })
        this.timer = setTimeout(() => {
            this.props.handleHomeList(this.state.type, this.state.channel_type);
        }, 1);

    }
    componentWillUnmount() {
        clearTimeout(this.timer);
        clearTimeout(this.timer1)
    }
    componentDidMount() {
        this.refs.bscroll.handlepullingUp(() => {
            console.log(11111)
        })
        this.props.handleHomeList(this.state.type, this.state.channel_type);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);