import React,{Fragment} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Layout from "../layout";
import Cookie from 'js-cookie'
export default (routes)=>{
    const eachRoutes=(route)=>{
        return <Route
            key={route.key}
            path={route.path}
            render={(props)=>(
                <Fragment>
                    <Route component={route.component} />
                    <Redirect to={route.children[0].path} />
                    <Switch>
                        {
                            route.children.map((child)=>{
                                if(child.children){
                                    return eachRoutes(child)
                                }
                                if(!route.meta.requireAuth || sessionStorage.getItem("token") || route.path==="/login"){
                                    return <Layout {...child}>
                                            <Route path={child.path} key={child.key} component={child.component} {...props} />
                                    </Layout>
                                }else{
                                    return <Redirect to={{pathname:"./login",state:{form:child.path}}}/>
                                }
                            })
                        }
                    </Switch>
                </Fragment>
            )}
        />
    }
    return routes.map((route)=>{
        if(route.children){
            return eachRoutes(route)
        }else{
            return <Route path={route.path} key={route.key} render={(props)=>{
                if(!route.meta.requireAuth || Cookie.get("token")||route.path==="/login"){
                    return <Layout {...route}>
                        <route.component key={route.key} {...props}  />
                    </Layout>
                }else{
                        return <Redirect to={{pathname:"/login",state:{from:route.path}}} />
                }
            }} />
        }
    })
}