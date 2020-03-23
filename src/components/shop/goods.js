import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import ImageView from '@/components/base/imageView'
import BaseButton from '@/components/base/baseButton'
import Dialog from '@/components/showDialog'
export default class Goods extends Component {
    state={
        leftIndex:0,
    }
    clickTitles=(index)=>{
        this.setState({
            leftIndex:index
        })
        const h3s = document.querySelectorAll(".h3");
        const rightDom = this.refs.right;
        console.log(rightDom.scrollTop)
        rightDom.scrollTop = h3s[index].offsetTop-180;
    }
    scrollRight=()=>{
        const h3s = document.querySelectorAll('.h3');
        let scrollIndex = 0;
        if (this.props.goodsData.length) {
            h3s.forEach((item, index) => {
                // 当前元素距离可视区域上下左右的宽高；如果小于可视区域，就说明当前的h3出去了，
                if (item.getBoundingClientRect().top <= 181) {
                    scrollIndex = index;
                }
            })
            // 每次的数据只更新一次；
            this.setState({
                leftIndex: scrollIndex
            })
        }
    }
    render() {
        const { dialog,goodsData,showMask } = this.props;
        return (
            <Fragment>
                {dialog&&<Dialog closeClick={()=>{showMask()}}/>}
                <CartWrapper>
                    <div className="left">
                        {
                            goodsData && goodsData.map((item, index) => {
                                return <div className={index === this.state.leftIndex ? "left-item active" : "left-item"} key={index}>
                                    <span onClick={() => { this.clickTitles(index) }}>{item.name}</span>
                                </div>
                            })
                        }
                    </div>
                    <div className="right" ref="right" onScroll={()=>{this.scrollRight()}}>
                        {
                            goodsData && goodsData.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <TypeWrapper className="h3">
                                            <span>{item.name}</span>
                                        </TypeWrapper>
                                        {
                                            item.foods.map((v, i) => {
                                                return <ImageWrapper key={i} className="image-text">
                                                    <dt>
                                                        <div style={{ width: '1.14rem', height: '1.14rem' }}>
                                                            <ImageView src={v.image} />
                                                        </div>
                                                    </dt>
                                                    <dd>
                                                        <p>{v.name}</p>
                                                        <p className="desc">{item.description}</p>
                                                        <p>月售{v.sellCount}份  好评率{v.rating}%</p>
                                                        <p className="price">
                                                            <span className='new-price'>¥{v.price}</span>
                                                        </p>
                                                    </dd>
                                                    <div className="btn-wrapper">
                                                        <BaseButton round={true}>-</BaseButton>
                                                        <span className="count">1</span>
                                                        <BaseButton round={true}>+</BaseButton>
                                                    </div>

                                                </ImageWrapper>
                                            })
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </CartWrapper>
                <FooterBar>
                    <BtnShowMask
                        className="btn-showmask"
                        onClick={() => { showMask() }}
                    >
                    </BtnShowMask>
                </FooterBar>
            </Fragment>

        )
    }
}
const FooterBar = (props) => {
    return <FooterDiv className='footer'>
        {props.children}
    </FooterDiv>
}
const FooterDiv = styled.div`
    width: 100%;
    height: .90rem;
    background: grey;
    position:absolute;
    left:0;
    bottom: 0;
`
const BtnShowMask = styled.div`
  width: .9rem;
  height: .9rem;
  background: limegreen;
  color: #fff;
  text-align:center;
  line-height: .9rem;
  border-radius: 50%;
`
const ImageWrapper = styled.dl`
  width: calc( 100% - 20px);
  display: flex;
  padding: 10px;
  position: relative;
  .btn-wrapper {
    position: absolute;
    right: 33px;
    bottom: 7px;
    .count {
      display:inline-block;
      width: .5rem;
      height: .5rem;
      text-align:center;
      line-height: .5rem; 
      font-size: .36rem;
    }
  }

  dt {
   flex: 4;
   display:flex;
   justify-content:center;
   align-items: center;
  }
  dd {
    flex: 6;
    p {
      margin:8px;
      text-align: left;
      font-size: .2rem;
      color: rgb(143,157,159);
      line-height: .2rem;
      &:nth-child(1) {
        font-size: .28rem;
        color: rgb(7,17, 27);
      }
    }
    .desc {
      text-align: left;
      font-size: .2rem;
      color: rgb(143,157,159);
      line-height: .2rem;
    }
    .price {
      .new-price {
        font-size: .28rem;
        color: red;
        font-weight: 700;
        line-height: .48rem;
      }
      .old-price {
        font-size: .2rem;
        color: #ccc;
        font-weight: 700;
        line-height: .48rem;
      }
    }
  }
`
const TypeWrapper = styled.h3`
    background:#f3f5f7;
    height:.52rem;
    border-left:3px solid #d9dde1;
    span{
        display:inline-block;
        margin-left:.28rem;
        line-height:.52rem;
        font-size:.3rem;
        color:#000;
    }
`
const CartWrapper = styled.div`
    width:100%;
    height:calc(100% - .91rem);
    overflow:auto;
    display:flex;
    .left{
        flex:2;
        overflow:auto;
        border-right:1px solid black;
        .left-item {
            width: 100%;
            height: 1.08rem;
            background: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .24rem;
            font-weight: 200;
            line-height: .56rem;
            span {
              display: inline-block;
              width: 80%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border-bottom:1px solid rgb(7, 17, 27, 0.1);
            }
          } 
          .active {
            color: #000;
            background:#fff;
          }
    }
    .right{
        flex:8;
        background:#eee;
        overflow:auto;
        scroll-behavior: smooth;
    }
`