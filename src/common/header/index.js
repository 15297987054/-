import React from 'react';
import { HeaderWrapper } from "./styled";
import {Link} from "react-router-dom";
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { back: "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png", right: "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" }
            ],
          
        }
    }
    render() {
        let {info}=this.props;
        return (
            <HeaderWrapper>
                <Link to="/discover">
                    <img src={this.state.list[0].back} onClick={this.clickHandler.bind(this, 'history')} />
                </Link>

                <h2>识货{info?info.name:""}文章</h2>
                <img src={this.state.list[0].right} />
            </HeaderWrapper>
        )
    }
    clickHandler(e) {

    }
}

