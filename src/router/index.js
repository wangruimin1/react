import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class index extends Component {
    render() {
        let routes = this.props.routes.filter(item=>item.component);
        let redirects = this.props.routes.filter(item=>item.redirect)
        return (
            <Switch>
                {
                    routes.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(routerInfo)=>{
                            if(item.children){
                                return <item.component routes={item.children} {...routerInfo}></item.component>
                            }
                            return <item.component {...routerInfo}></item.component>
                        }}/>
                    })
                }
                {
                    redirects.map((item,index)=>{
                        return <Redirect key={index} to={item.redirect}/>
                    })
                }
            </Switch>
        )
    }
}
