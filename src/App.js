import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router'
import config from './router/config'
import {GlobalStyle} from './style'
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <GlobalStyle/>
                    <RouterView routes={config}></RouterView>
                </BrowserRouter>
            </div>
        )
    }
}
