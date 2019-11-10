import React from "react"
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default (routes) => {
    let eachTabBar = (route) => {
        return <SubMenu
            key={route.key}
            title={
                <span>
                    <Icon type={route.icon} />
                    <span>{route.name}</span>
                </span>
            }
        >
           {
               route.children.map((child)=>(
                 <Menu.Item key={child.key}>
                     <Icon type={child.icon} />
                     <span className="nav-text">{child.name}</span>
                 </Menu.Item>
               ))
           }
            
        </SubMenu>
    }

    return routes.map((route) => {
        if (route.children) {
            return eachTabBar(route)
        } else {
            return <Menu.Item key={route.key}>
                <Icon type={route.icon} />
                <span className="nav-text">{route.name}</span>
            </Menu.Item>
        }
    })
}


