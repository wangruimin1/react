import React, { Component } from 'react'
import styled from 'styled-components'

const Dialog = styled.div`
  width: 100vw;
  height: calc( 100vh - .9rem );
  position:fixed;
  left: 0;
  top: 0;
  z-index:1;
  transition: all 1s;
`

const Mask = styled.div`
  width: 100%;
  height: calc( 100vh - .9rem );
  position:fixed;
  background: #000;
  opacity: .6;
  left: 0;
  top: 0;
`

const Tip = styled.div`
  width: 100%;
  height: 400px;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
`

class ShowDialog extends Component {
  render() {
    return (
      <Dialog className="dialog">
        <Mask onClick={() => this.props.closeClick()}></Mask>
        <Tip></Tip>
      </Dialog>
    )
  }
}

export default ShowDialog;