import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/navBar'
import Goods from '@/components/shop/goods'
import Sellers from '@/components/shop/seller'
import Ratings from '@/components/shop/ratings'
import {getGoods} from '@/api/index'

class Seller extends Component {
    state={
        tabList:["点餐","评价","商家"],
        tabIndex:0,
        dialog:false
    }
    render() {
        const {goodsData} = this.props;
        const {dialog} = this.state;
        return (
            <Fragment>
                <NavBar 
                tabIndex={this.state.tabIndex}
                tabList={this.state.tabList}
                tabClick={(index)=>{
                    this.handleClick(index)
                }}/>
                {this.state.tabIndex===0&&<Goods
                 goodsData={goodsData}
                 dialog={dialog}
                 showMask={()=>this.showMask()}
                 >
                </Goods>}
                {
                    this.state.tabIndex===2&&<Sellers/>
                }
                {
                    this.state.tabIndex===1&&<Ratings/>
                }
            </Fragment>
        )
    }
    showMask = () => {
        let flag = this.state.dialog;
        flag = !flag;
        this.setState({
            dialog: flag
        },()=>{
            console.log(this.state.dialog)
        })
    }
    componentDidMount(){
        this.props.getGoodsData()
    }
    handleClick(index){
        this.setState({
            tabIndex:index
        })
    }
}
const mapState = state=>{
    return {
        goodsData:state.cart.goodsData
    }
}
const mapActions = dispatch=>{
    return {
        getGoodsData(){
            getGoods().then(res=>{
                const action = {
                    type:"init_goods",
                    data:res.data
                }
                dispatch(action);
            })
        }
    }
}
export default connect(mapState,mapActions)(Seller)
