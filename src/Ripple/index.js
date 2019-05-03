import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = props => keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`

const RippleSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};

  div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: ${p => p.color};
    border-radius: 50%;
    animation: ${p => motion(p)} 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 18px;
    left: 50px;
  }
  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 9px;
    left: 41px;
  }
  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 6px;
    left: 29px;
  }
  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 9px;
    left: 18px;
  }
  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 18px;
    left: 9px;
  }
  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 29px;
    left: 6px;
  }
  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 41px;
    left: 9px;
  }
  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 50px;
    left: 18px;
  }
  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 53px;
    left: 29px;
  }
  div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px;
  }
  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px;
  }
`

const Ripple = ({ color, size, sizeUnit }) => (
  <RippleSpinner color={color} size={size} sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </RippleSpinner>
)

Ripple.defaultProps = {
  size: 64,
  color: '#00bfff',
  sizeUnit: 'px'
}

export default Ripple
