import React, { Component, Fragment } from 'react';
import { NewlistWrapper } from "./styled"
import { PageContainer } from "@/globalStyled";
import Header from "@common/header";
import { mapStateToProps, mapDisPathToProps } from "./connect"
import { connect } from 'react-redux';
import Bscroll from "@common/bscroll";
class Newwest extends Component {
    constructor() {
        super()
        this.state = {
            str: "",
        }
    }
    render() {
        let { disnewlist, disinfo, disnewstr } = this.props;
        console.log(this.props)
        this.state.str = disnewstr;
        return (
            <PageContainer>
                <Header info={disinfo} />
                <Bscroll ref="bscroll">
                    <NewlistWrapper>
                        {
                            disnewlist.map((item, index) => (
                                <ul key={index} className="newlist">
                                    <li>
                                        <img src={item.data.img} alt="识货"/>
                                    </li>
                                    <li>
                                        <p>{item.data.title}</p>
                                        <p>{item.data.intro}</p>
                                        <p><span><img src={item.data.avatar} /></span><i>{item.data.author_name}</i></p>
                                    </li>
                                </ul>
                            ))
                        }
                    </NewlistWrapper>
                </Bscroll>
            </PageContainer>
        )
    }
    componentDidMount() {
        this.props.handledisnewlist(this.state.str);
        this.refs.bscroll.handlepullingUp(async () => {
            let flag = await this.props.handledisnewlist(this.state.str);
            if (flag) {
                this.refs.bscroll.handlefinishPullUp();
            }
        })

    }
}
export default connect(mapStateToProps, mapDisPathToProps)(Newwest)