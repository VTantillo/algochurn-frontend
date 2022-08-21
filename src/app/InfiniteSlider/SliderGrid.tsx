import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

type StyleProps = {
  style: {
    '--track-width': string
    '--card-width': string
  }
}
const Wrapper = styled.div<StyleProps>`
  width: 1100px;
  position: relative;
  display: grid;
  place-items: center;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 32px 0;
  border-radius: 4px;

  &::before,
  &::after {
    background: linear-gradient(to right, hsl(207deg 100% 7%) 0%, hsl(207deg 100% 7% / 0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 10%;
    z-index: 2;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 0;
    right: 0;
    transform: rotate(180deg);
  }
`

const rotateSlider = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(var(--track-width) / 2));
  }
`

const Track = styled.div`
  display: flex;
  gap: 32px;
  animation: ${rotateSlider} 45s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

const SliderGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (trackRef) {
      setTrackWidth(trackRef.current?.scrollWidth ?? 0)
    }
  }, [trackRef])

  return (
    <Wrapper
      style={{
        '--card-width': '500px',
        '--track-width': `-${trackWidth}px`,
      }}
    >
      <Track ref={trackRef}>{children}</Track>
    </Wrapper>
  )
}

export default SliderGrid
