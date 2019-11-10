import React from "react";
import Ads from "@common/ads";
import { HeadBanner } from "./styled";
import {Link} from "react-router-dom"
export default class BeforeLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [{ name: "我的收藏", icon: "\ue619" }, { name: "我的晒照", icon: "\ue687" }, { name: "我的礼品", icon: "\ue659" }],
            arr1:[{ name: "我的收藏", icon: "\ue625" }, { name: "我的晒照", icon: "\ue617" }]
        }
    }
    render() {
        let { arr,arr1 } = this.state;
        return (
            <div>
                <Ads />
                <HeadBanner>
                    <div style={{ backgroundImage: 'url(' + "http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png" + ')' }}>
                        <div className="img-face">
                            <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" />
                        </div>
                        <div className="sign" >
                           <Link to="/login" style={{color:"white"}}> <span>登录</span></Link>
                            <Link to="/register" style={{color:"white"}}><span>注册</span></Link>
                            <p>金币 0</p>
                        </div>
                    </div>
                    <div className="my-shihuo">
                        <div className="tit">
                            <span>我的识货</span>
                        </div>
                        <ul className="my-shihuo-ul1">

                            {
                                arr.map((item, index) => (
                                    <li key={index}>
                                        <div className="my-shihuo-nav1">
                                            <span className="iconfont">
                                                {item.icon}
                                            </span>
                                            <span className="collection-text">
                                                {item.name}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                        <ul className="my-shihuo-ul1">

                            {
                                arr1.map((item, index) => (
                                    <li key={index}>
                                        <div className="my-shihuo-nav1">
                                            <span className="iconfont">
                                                {item.icon}
                                            </span>
                                            <span className="collection-text">
                                                {item.name}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </HeadBanner>
            </div>
        )
    }
}