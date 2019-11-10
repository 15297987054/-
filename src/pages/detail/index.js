import React from "react";
import { Wrapper } from "./styled";
import { NavLink,Link } from "react-router-dom";
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
class Detail extends React.Component {
    constructor() {
        super()

        this.state = {
            xiala_box_show: false,
            arrListSubMune: [
                { subname: "全部", tag_id: "0" },
                { subname: "识货", tag_id: "shihuo" },
                { subname: "有图", tag_id: "photo" },
                { subname: "脚感", tag_id: "31" },
                { subname: "鞋码", tag_id: "32" },
                { subname: "鞋面", tag_id: "30" },
                { subname: "减震", tag_id: "29" },
            ],
            index2: "",
            tag_id: "0"
        }

    }
    render() {

        let obj = {}
        let { xiala_box_show, arrListSubMune, index2 } = this.state;
        let { detail_list } = this.props;
        console.log(this.props.location.state)
        if (!detail_list.comments) { detail_list.comments = [] }
        if (this.props.location.state) {
            obj = this.props.location.state.obj.item.data;
            sessionStorage.setItem("obj", JSON.stringify(obj));
        } else {
            obj = JSON.parse(sessionStorage.getItem("obj"))
        }
        return (
            <Wrapper>
                <div className="topbar_fixed">
                    <div className="top-bar">
                        <NavLink to={"/home"}>
                            <span className="iconfont" >{"\ue662"}</span>
                        </NavLink>
                        <p>{obj.title}</p>
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
                <div className="img_container">
                    <img alt="" src={obj.img} />
                </div>
                <div className="h2">{obj.title}</div>
                <div className="h3">
                    <div className="t1">{obj.intro}</div>
                    <div style={{ display: obj.price ? "block" : "none", fontWeight: "800", marginLeft: "0.1667rem", color: "#ff4338", fontSize: "0.1667rem" }}>￥{obj.price}</div>
                </div>

                <div className="kb_box">
                    <div className="title">全网口碑（1356）</div>
                    <div className="list-submenu">
                        <ul>
                            {
                                arrListSubMune.map((item, index) => (
                                    <li key={index} onClick={this.handleChannelType.bind(this, index, item.tag_id)} className={index2 == index ? "active2" : ""}>{item.subname}</li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        detail_list.comments.map((item, index) => (
                            <div className="list" key={index}>
                                <div className="head">
                                    <div>
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trade/avatar_default.png" />
                                    </div>
                                    <div className="name_time">
                                        <p>{item.nickname}</p>
                                        <div className="time">{item.date}</div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="text">
                                        {item.content}
                                    </div>
                                    <div className="content_img">
                                        {
                                            item.img_attr.map((item, index) => (
                                                <s key={index}>
                                                    <img alt="" src={item} />
                                                </s>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div id="bottom">
                    <span className="service" >
                        <span className="iconfont" id="iconfontStyle">{"\ue606"}</span>
                        <span>客服</span>
                    </span>
                    <Link to={"/shopcar"}>
                        <span className="shopbag">
                            <span className="iconfont" id="iconfontStyle">{"\ue615"}</span>
                            <span>购物车</span>
                        </span>
                    </Link>
                    <Link to={{pathname:"/shopcar",state:{msg:{obj}}}}>
                        <div className="addshop"  >加入购物袋</div>
                    </Link>
                    <div className="buy" >立即购买</div>
                </div>
            </Wrapper>
        )
    }
    componentWillMount() {
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
    componentDidMount() {
        this.props.handleDetail(this.state.tag_id);
    }
    handleXiaLaBox(val) {
        this.setState({
            xiala_box_show: !val
        })
    }
    handleChannelType(index, val) {
        this.setState({
            index2: index,
            tag_id: val
        })
        setTimeout(() => {
            this.props.handleDetail(this.state.tag_id);
        }, 1)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)