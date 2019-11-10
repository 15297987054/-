import React from "react";
import { Search_wrapper } from "./styled";
import {NavLink} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./connect"
import { connect } from "react-redux";
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            hot_arr:["618","红包","AJ11","欧文4","LBJ15","Air force 1","球鞋90秒","React","ultra boost"],
            value:"",
        }
    }
    render() {

        let {hot_arr,value} =this.state;
        let {search_list}=this.props
        if(!search_list){search_list=[]}
        console.log(search_list)
        return (
            <Search_wrapper>
                <div >
                   
                    <div className="searchBox">
                   
                            <div className="search">
                            <i className="iconfont" >{"\ue7a6"}</i>
                                <input type="text" placeholder="搜索商品、品牌" value={value} onChange={this.handleKeywords.bind(this)}/>
                            </div>
                      
                        <NavLink to={"/home"}>
                            <i className="iconfont" id="icon">取消</i>
                        </NavLink>
                    </div>
                </div>
                <div className="inner">
                    <div className="dt">热门搜索</div>
                    <ul>
                        {
                            hot_arr.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="keywords">
                        <ul>
                            {
                                search_list.map((item,index)=>(
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                </div>
            </Search_wrapper>
        )
    }
    componentDidMount(){
        this.props.handleSearch(this.state.value);
    }
    handleKeywords(e){
        let val=e.target.value;
        this.setState({
            value:val
        })
        setTimeout(()=>{
            this.props.handleSearch(this.state.value);
        },1)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)