import React from "react";
import Ads from "../../common/ads";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import Bscroll from "@common/bscroll"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import "./index.css"
class Discount extends React.Component {
    constructor() {
        super()
        this.state = {
            arr_discount: [{ type: "精选", r: "999" }, { type: "鞋类", r: "1" }, { type: "服饰", r: "2" }, { type: "数码", r: "3" }, { type: "兴趣", r: "4" }],
            index_discount1: 0,
            discount_flag: "",
            hostsearch: ["AJ", "NIKE", "亚瑟士", "洗面奶", "DicKies", "李维斯", "新百伦", "PUMA"],
            hostsearchShow: "",
            r: ""
        }
    }
    render() {
        let { arr_discount, index_discount1, discount_flag, hostsearch, hostsearchShow } = this.state;
        let { discount_list } = this.props;
        return (
            <div>
                <Ads />
                <div className="All">
                    <div className="top_input">
                        <span className="iconfont" id="icon-span">{"\ue7a6"}</span>
                        <input type="text" placeholder="搜全网低价好券" />
                    </div>
                    <div className="yhq">
                        已收集&nbsp;&nbsp;
                        <span>0</span>
                        &nbsp;&nbsp;张优惠券
                        <span className="yhq-span2">搜券指南&nbsp;></span>
                    </div>
                    <div className="temai">
                        <div className="temai-tit">
                            品牌特卖
                            <span className="temai-tit-span">更多品牌&nbsp;></span>
                        </div>
                        <ul className="temai-tit-ul">
                            <li>
                                <span>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png" />
                                </span>
                                <span>运动</span>
                            </li>
                            <li>
                                <span>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png" />
                                </span>
                                <span>休闲</span>
                            </li>
                            <li>
                                <span>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png" />
                                </span>
                                <span>户外</span>
                            </li>
                            <li>
                                <span>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png" />
                                </span>
                                <span>数码</span>
                            </li>
                            <li>
                                <span>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png" />
                                </span>
                                <span>更多</span>
                            </li>
                        </ul>


                        <div className="discount-mask" style={{ display: hostsearchShow ? "block" : "none", zIndex: 87 }}>  </div>

                        <ul className="temai-titi-ul2">
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png" />
                                <p className="truble">日高</p>
                                <p className="brandList">定金50抵450</p>
                            </li>
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png" />
                                <p className="truble">匹克</p>
                                <p className="brandList">不止5折</p>
                            </li>
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg" />
                                <p className="truble">dickies</p>
                                <p className="brandList">满11减10元</p>
                            </li>
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png" />
                                <p className="truble">铭瑄</p>
                                <p className="brandList">虎扑专享满600减180</p>
                            </li>
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png" />
                                <p className="truble">UA</p>
                                <p className="brandList">虎扑专享满600减180</p>
                            </li>
                            <li>
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg" />
                                <img alt="" src="http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg" />
                                <p className="truble">Sony索尼</p>
                                <p className="brandList">满48减10</p>
                            </li>
                        </ul>

                    </div>
                    <div className="bg-line"></div>
                    <div className="bottom-goods-list">
                        <div className="bottom-goods-list-banner">
                            <img alt="" src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png" />
                        </div>
                        <div className="discount-list-view-top" style={{ position: discount_flag ? "sticky" : "", top: discount_flag ? "0" : "" }}>


                            <div className="discount-list-menu">
                                <ul className="discount-nav">
                                    {
                                        arr_discount.map((item, index) => (
                                            <li key={index} style={{ borderBottom: index_discount1 === index ? "3px solid #ff4338" : "" }} onClick={this.handleLiClick.bind(this, index, item.r)} className={index_discount1 == index ? "discount-active" : ""}>{item.type}</li>
                                        ))
                                    }
                                    <li className="iconfont" id="iconfontSize" onClick={this.handleDiscountClick.bind(this, "show")}>{"\ue60d"}</li>
                                </ul>
                            </div>
                           {/* <Bscroll ref="bscroll">*/}
                                <ul className="discount-ul-goodslist">
                                    {
                                        discount_list.map((item, index) => (
                                            <Link  key={index} to={{pathname:"/detail",state:{obj:{item}}}}>
                                            <li>
                                                <span className="discount-Haden">
                                                    <div className="discount-Haden-img">
                                                        <img alt="" src={item.img} />
                                                    </div>
                                                    <div className="discount-Haden-right">
                                                        <h2>{item.title}</h2>
                                                        <div className="discount-detail">
                                                            <span>{item.subtitle}</span>
                                                        </div>
                                                        <div className="discount-detail">
                                                            <span className="discount-detail-span">{item.business}</span>
                                                            <span className="discount-detail-span">{item.date}</span>
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                            </Link>
                                        ))
                                       
                                    }
                                </ul>
                          {  /*</Bscroll>*/}
                          
                        </div>
                        <div className="menu-list-box" style={{ position: hostsearchShow ? "absolute" : "", top: discount_flag ? "0" : "", display: hostsearchShow ? "block" : "none" }}>
                            <div className="tags-btn">
                                <span>切换分类</span>
                                <span onClick={this.handleDiscountClickHotsearch.bind(this, hostsearchShow)} className="iconfont">{"\ue74c"}</span>
                            </div>
                            <ul className="menu-list-box-ul">
                                {
                                    arr_discount.map((item, index) => (
                                        <li onClick={this.handleDiscountClickHotsearch.bind(this, hostsearchShow, index, item.r)} key={index} className={index_discount1 == index ? "discount-active" : ""}>{item.type}</li>
                                    ))
                                }
                            </ul>
                            <div className="discount-hotsearch">热门搜索</div>
                            <ul className="menu-list-box-hotsearchul" >
                                {
                                    hostsearch.map((item, index) => (
                                        <li onClick={this.handleDiscountClickHotsearch.bind(this, hostsearchShow)} key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleGetDiscountList(this.state.r);
        console.log(this.refs.bscroll)
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    handleLiClick(index, r) {
        this.setState({
            index_discount1: index,
            r: r
        })
        setTimeout(() => {
            this.timer = this.props.handleGetDiscountList(this.state.r);
        }, 1)
    }
    handleDiscountClick(value) {
        this.setState({
            discount_flag: true,
            hostsearchShow: value ? true : "",

        })

    }
    handleDiscountClickHotsearch(value, index, r) {
        let val = !value;
        this.setState({
            hostsearchShow: val,
            discount_flag: true,
            index_discount1: index,
            r: r
        })
        setTimeout(() => {
            this.timer = this.props.handleGetDiscountList(this.state.r);
        }, 1)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discount)