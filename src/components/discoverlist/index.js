import React, { Component } from 'react'
import { DiscoverlistWrapper } from "./styled";
import { connect } from "react-redux";
import Bscroll from "@common/bscroll"
import { mapStateToProps, mapDispatchToProps } from "./connect";
class Discoverlist extends Component {
    constructor() {
        super()
        this.state = {
            sign: ["\ue506", "\ue502"],
            str: ""
        }
    }
    render() {
        let { discoverlist } = this.props;
        console.log(this.props,"222222222")
        return (
            <Bscroll ref="bscroll">
                <DiscoverlistWrapper className="discover">

                    <div >
                        <div className="discoverlist">{
                            discoverlist.map((item, index) => (
                                <div className="dislist" key={index}>
                                    <div>
                                        <img src={item.data.avatar} />
                                    </div>
                                    <dl>
                                        <dt>{item.data.author_name}</dt>
                                        <dd>{item.data.date}</dd>
                                        <dd>{item.data.title}</dd>
                                        <dd><img src={item.data.img} /></dd>
                                        <dd>
                                            <i className="iconfont">{this.state.sign[0]}</i>
                                            <span>{item.data.praise}</span>

                                            <i className="iconfont">{this.state.sign[1]}</i>
                                            <span>{item.data.reply_count}</span>

                                        </dd>
                                    </dl>

                                </div>
                            ))}
                        </div>
                    </div>

            </DiscoverlistWrapper>
            </Bscroll>
        )
    }
    componentDidMount() {
        console.log("第一次请求");
        this.props.handlenewlist(this.props.tag_id,'',"click")
        this.refs.bscroll.handlepullingUp( async () => {
            console.log("huafongle");
            let flag = await this.props.handlenewlist(this.props.tag_id,this.props.str,"scroll");
            if (flag) {
                this.refs.bscroll.handlefinishPullUp()
            };
        }
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Discoverlist)
