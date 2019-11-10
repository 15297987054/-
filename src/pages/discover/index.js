import React, { Component, Fragment } from "react"
import Carouse from "./carouse/index"
import Goodlist from "./goodslist/index";
import Bscroll from "@common/bscroll";
export default class Discover extends Component {
    render() {
        return (
            <Bscroll>
                <div>
                    <Carouse />
                    <Goodlist />
                </div>
            </Bscroll>
        )
    }
}