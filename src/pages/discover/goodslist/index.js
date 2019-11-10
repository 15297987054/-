import React, { Component ,Fragment } from 'react'
import { GoodlistWrapper } from "./styled";
import Discoverlist from "@components/discoverlist"
import Bscroll from "@common/bscroll"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import { connect } from 'react-redux';
 class Goodlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ["今日推荐", "篮球", "视频", "最新资讯", , "潮流风向", "3C新奇特", "潮鞋志", , "球鞋90秒",],
            activeindex:0,
        }
    }
    render() {
        let {activeindex}=this.state;
        return (
            <Fragment>
            <GoodlistWrapper>
                <Bscroll>
                    <div className="list">{
                        this.state.list.map((item, index) => (
                            <span key={index} onClick={this.clickhandle.bind(this,index)} className={activeindex==index?'active':''}>{item}</span>
                        ))}
                    </div>
                </Bscroll>    
            </GoodlistWrapper>
            <Discoverlist/>
            </Fragment>
        )
    }
    clickhandle(index){
        this.setState({
            activeindex:index,
        })
        let arr=[283,347,281,270,0,318,273,285,316];
        this.props.handlereplace(arr[index],"click");
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Goodlist)
