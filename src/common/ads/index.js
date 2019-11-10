import React from "react";
import "./index.css";
import AdsSwiper from "./adsSwiper"
export default class Ads extends React.Component {
    constructor() {
        super();
        this.state = {
            ads_arr: [
                <div className="headCarousel">
                    <div className="img">
                        <img src="http://shihuo.hupucdn.com/def/20190705/b98295c91284a0821efb1da1ddfce8f51562308807.jpg" />
                    </div>
                    <a className="App-down-link" href="http://www.shihuo.cn/api/transit?source=http://m.shihuo.cn/&target=http://dwz.cn/HV7q1nIT">
                        <div className="product-info">
                            <p>Nike Air Force 1</p>
                            <p className="priceDetail">¥589
                        <span className="span-discount">6.6折</span>
                                <span className="span-oldprice">¥899</span>
                            </p>
                        </div>
                    </a>
                </div>,
                <div className="headCarousel">
                    <div className="img">
                        <img src="http://shihuo.hupucdn.com/def/20170929/9f9b0996f280d808cf1d1c835dff2d711506692957.jpg" />
                    </div>
                    <a className="App-down-link" href="http://www.shihuo.cn/api/transit?source=http://m.shihuo.cn/&target=http://dwz.cn/HV7q1nIT">
                        <div className="product-info">
                            <p>李宁 韦德之道全城5</p>
                            <p className="priceDetail">¥219
                    <span className="span-discount">4.4折</span>
                                <span className="span-oldprice">¥499</span>
                            </p>
                        </div>
                    </a>
                </div>,
                <div className="headCarousel">
                    <div className="img">
                        <img src="http://shihuo.hupucdn.com/trade/reposition/2019-05-30/04dfcf46c1c7b94bcf3606fbdf85fbfe.png" />
                    </div>
                    <a className="App-down-link" href="http://www.shihuo.cn/api/transit?source=http://m.shihuo.cn/&target=http://dwz.cn/HV7q1nIT">
                        <div className="product-info">
                            <p>Nike Hyperdunk X(2018)</p>
                            <p className="priceDetail">¥678
                <span className="span-discount">6.2折</span>
                                <span className="span-oldprice">¥1099</span>
                            </p>
                        </div>
                    </a>
                </div>,
                <div className="headCarousel">
                    <div className="img">
                        <img src="http://sh1.hoopchina.com.cn/images/icons/logo_radius.png" />
                    </div>
                    <a className="App-down-link" href="http://www.shihuo.cn/api/transit?source=http://m.shihuo.cn/&target=http://dwz.cn/HV7q1nIT">
                        <div className="product-info">
                            <p>识货APP ⋅ 全世界的运动好货</p>
                            <p className="priceDetail">获取运动装备最低价

                            </p>
                        </div>
                    </a>
                </div>
            ],
            SHOW: true
        }

    }
    render() {
        let { ads_arr, SHOW } = this.state;
        return (
            <div className="first-position" style={{ display: SHOW ? "block" : "none" }}>
                <AdsSwiper swiperItems={ads_arr} style={{ fontFamily: "Helvetica,sans-serif" }} />
                <span className="App-down-btn">打开</span>
                <div className="close" onClick={this.handleSHOW.bind(this)}><img src="//m.shihuo.cn/images/trademobile/appdownload_close.png" alt="" /></div>
            </div>
        )
    }
    handleSHOW() {
        this.setState({
            SHOW: false
        })
    }
}

{/*<div className="download-solgen-info">
                    <p>识货APP&nbsp;⋅&nbsp;全世界的运动好货</p>
                    <p className="spaceP">获取运动装备最低价</p>
                </div>  顶部广告稿轮播图不同的那一张结构 */}