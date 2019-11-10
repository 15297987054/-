import React, { Component } from 'react';
import {PageContainer} from "@/globalStyled"
import Header from "@common/header"
import Moregoods from "@components/moregoods"

export default class Newhot extends Component {
  render() {
    return (
      <PageContainer> 
             <Header/>
            <Moregoods />
       </PageContainer>
    );
  }
}
