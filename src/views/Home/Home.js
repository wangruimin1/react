import React, { Component } from 'react'
import RouterView from '@/router'
import {HomeWrapper,HeaderWrapper,MainWrapper,FooterWrapper} from '@/style'
export default class Home extends Component {
    render() {
        return (
            <HomeWrapper className="home">
                <HeaderWrapper></HeaderWrapper>
                <MainWrapper>
                    <RouterView routes={this.props.routes}/>
                </MainWrapper>
                <FooterWrapper/>
            </HomeWrapper>
        )
    }
}
