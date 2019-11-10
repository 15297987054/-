import React from "react";
import {TabBarRoutes} from "../../router";
import {NavLink} from "react-router-dom";

import "./index.css";

export default class TabBar extends React.Component{
    render(){
        return(
            <div id="tabBar">
                {
                    TabBarRoutes.map((item,index)=>(
                        <NavLink key={index} to={item.path}>
                            <i className="iconfont">{item.icon}</i>
                            <span>{item.name}</span>
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}