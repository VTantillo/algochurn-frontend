import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(var(--track-width) / 2));
  }
`

type StyleProps = {
  style: {
    '--track-width': string
    '--card-width': string
    '--card-gap': string
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

const Track = styled.div`
  display: flex;
  gap: var(--card-gap);
  animation: ${slide} 45s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

const CssSlider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  const cardGap = 32

  useEffect(() => {
    if (trackRef) {
      setTrackWidth(trackRef.current?.scrollWidth ?? 0)
    }
  }, [trackRef])

  return (
    <Wrapper
      style={{
        '--card-width': '500px',
        '--card-gap': `${cardGap}px`,
        '--track-width': `-${trackWidth + cardGap}px`,
      }}
    >
      <Track ref={trackRef}>{children}</Track>
    </Wrapper>
  )
}

export default CssSlider
