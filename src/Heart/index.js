import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = props => keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`

const HeartSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;

  div {
    top: 23px;
    left: 19px;
    position: absolute;
    width: ${p => `${p.size}${p.sizeUnit}`};
    height: ${p => `${p.size}${p.sizeUnit}`};
    background: ${p => p.color};
    animation: ${p => motion(p)} 1.2s infinite
      cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  div:after,
  div:before {
    content: ' ';
    position: absolute;
    display: block;
    width: ${p => `${p.size}${p.sizeUnit}`};
    height: ${p => `${p.size}${p.sizeUnit}`};
    background: ${p => p.color};
  }
  div:before {
    left: -17px;
    border-radius: 50% 0 0 50%;
  }
  div:after {
    top: -17px;
    border-radius: 50% 50% 0 0;
  }
`

const Heart = ({ color, size, sizeUnit, width, height }) => (
  <HeartSpinner
    color={color}
    size={size}
    sizeUnit={sizeUnit}
    width={width}
    height={height}
  >
    <div />
    <div />
    <div />
  </HeartSpinner>
)

Heart.defaultProps = {
  size: 46,
  color: '#00bfff',
  sizeUnit: 'px'
}

export default Heart
