import React, { Component } from 'react'
import styled from 'styled-components'
const NavWrapper = styled.div`
    width:100%;
    height:${props=>props.height?props.height:".9rem"};
    display:flex;
    span{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:16px;
    }
    .active{
        color:red;
    }
`
export default class navBar extends Component {
    render() {
        const {tabList,tabIndex} = this.props;
        return (
            <NavWrapper>
                {
                    tabList.map((item,index)=>{
                        return <span
                         key={index} 
                         className={ index ===tabIndex ?"active":""}
                         onClick={()=>{
                            this.props.tabClick(index)
                        }}>{item}</span>
                    })
                }
            </NavWrapper>
        )
    }
}
