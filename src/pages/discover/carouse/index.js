import React, { Component, } from 'react'
import { CarouseWrapper } from "./styled.js";
import { Link, withRouter } from "react-router-dom"
import Bscroll from "@common/bscroll";
class Carouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: "http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1",
            sign: [
                { icon: "\ue604", text: "众测", path: "/" },
                { icon: "\ue71e", text: "栏目", path: "/" },
                { icon: "\ue773", text: "最新", path: "/newwest" },
                { icon: "\ue746", text: "最热", path: "/newhot" },
            ]
        }
    }
    render() {
        let { icon } = this.state
        return (
            <CarouseWrapper>
                <img src={icon}></img>
                <ul className="sort" >{
                    this.state.sign.map((item, index) => (
                        <Link key={index} to={item.path}>
                            <i className="iconfont">{item.icon}</i>
                            <span>{item.text}</span>
                        </Link>
                    ))
                }
                </ul>
                <div className="hottalk">
                    <h2>热门话题</h2>
                    <div ref="drag">
                        <dl>
                            <dt><img src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg" /></dt>
                            <dd># 晒穿搭，AJ11 CONCORD 领回家！！ #</dd>
                        </dl>
                        <dl>
                            <dt><img src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg" /></dt>
                            <dd># 限时下单 全场返利 #</dd>
                        </dl>
                        <dl>
                            <dt><img src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png" /></dt>
                            <dd># 晒照赢新年康扣 #</dd>
                        </dl>
                        <dl className="hotmore">
                            <span>查看更多</span>
                            <span> > </span>
                        </dl>
                    </div>
                    <p className="bgbottom"></p>
                </div>
            </CarouseWrapper>
        )
    }
    componentDidMount() {
        this.handledrag();
    }
    handledrag() {
        this.refs.drag.addEventListener("touchstart", (e) => {
            console.log(e);
            this.disx = e.targetTouches[0].clientX;
            this.refs.drag.addEventListener("touchmove", (e) => {
                this.moveX = e.targetTouches[0].clientX;
                this.distanceX = this.moveX - this.disx;
                this.refs.drag.style.left = this.distanceX + "px";
                this.refs.drag.addEventListener("touchend", (e) => {
                    if (this.distanceX > -120) {
                        this.refs.drag.style.transition=".3s"
                        this.refs.drag.style.left = 0;
                        this.refs.drag.style.transition="0s"
                    } else {
                           this.props.history.push("/newhot")
                    }
                })



            })

        })
    }

}
export default withRouter(Carouse)