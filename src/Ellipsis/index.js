import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion1 = props => keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const motion2 = props => keyframes`
   0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`
const motion3 = props => keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const EllipsisSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${p => p.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 6px;
    animation: ${p => motion1(p)} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 6px;
    animation: ${p => motion2(p)} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 26px;
    animation: ${p => motion2(p)} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 45px;
    animation: ${p => motion3(p)} 0.6s infinite;
  }
`

const Ellipsis = ({ color, size, sizeUnit }) => (
  <EllipsisSpinner color={color} size={size} sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
  </EllipsisSpinner>
)

Ellipsis.defaultProps = {
  size: 64,
  color: '#00bfff',
  sizeUnit: 'px'
}

export default Ellipsis
