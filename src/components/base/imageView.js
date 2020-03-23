import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const ImageWrapper = styled.div`
    width:100%;
    height:100;
    img{
        width:100%;
        height:auto;
        border-radius:${props=>props.round?"50%":""}
    }
`
const imageView =  (props)=> {
    const {src,round,imgClick} = props;
    return (
        <ImageWrapper round={round} onClick={()=>{imgClick()}}>
            <img src={src} alt=""/>
        </ImageWrapper>
    )
}
imageView.propTypes = {
    src:PropTypes.string,
    round:PropTypes.bool
}
export default imageView;