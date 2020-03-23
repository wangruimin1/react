import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const SpanButton = styled.span`
  display:inline-block;
  text-align:center;
  font-size: .48rem;
  color: #fff;
  line-height: ${props => props.height ? props.height : '.5rem'}; 
  width: ${props => props.width ? props.width : '.5rem'};
  height: ${props => props.height ? props.height : '.5rem'};
  background: ${props => props.bgColor ? props.bgColor : '#479DD7'};
  border-radius: ${props => props.round ? '50%': ''};
`
const BaseButton = (props)=>{
    return <SpanButton
    width={props.width}
    height={props.height}
    bgColor={props.bgColor}
    round={props.round}
    onClick={(type)=>{
        console.log(type)
    }}
    >
        {props.children}
    </SpanButton>
}
BaseButton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    round: PropTypes.bool
}
BaseButton.default = {
    round:true
}
export default BaseButton;