import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import LayoutComponent from "@layout";
import Cookies from "js-cookie";
export default (routes) => {

    let eachRoutes = (route) => {
    return <Route
            key={route.key}
            path={route.path}
            render={() => {
            return <Switch>
                    {
                        route.children.map((child) => {
                            if (child.children) {
                                return eachRoutes(child)
                                 
                            } else {
                                return <Route path={child.path} key={child.key} render={(props) => {
                                    if (Cookies.get("token") || child.path === "/login") {
                                        return child.path === "/login" ? <child.component {...props} /> : <LayoutComponent><child.component {...props} /></LayoutComponent>

                                    } else {
                                        return <Redirect to={{ pathname: "/login" }} />
                                    }
                                }} />

                            }
                        })
                    }
                    })
                }
            </Switch>
            }}
        />

    }



  return routes.map((route) => {
        if (route.children) {
            return eachRoutes(route)
           
        } else {
            return <Route path={route.path} key={route.key} render={(props) => {
                if (Cookies.get("token") || route.path === "/login") {
                    return route.path === "/login" ? <route.component {...props} key={route.key}/> : <LayoutComponent key={route.key}><route.component {...props} /></LayoutComponent>
                   
                } else {
                    return <Redirect to={{ pathname: "/login" }} />
                }
            }} />

        }
    })
}