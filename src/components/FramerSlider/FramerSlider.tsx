import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import { wrap } from '@motionone/utils'

const Wrapper = styled.div`
  max-width: 1100px;
  overflow-x: hidden;
  overflow-y: visible;
  display: grid;
  place-items: center;
  flex-wrap: nowrap;
`

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 32px;
  height: 300px;
  width: 100%;
`

const CardWrapper = styled.div`
  display: flex;
  gap: 32px;
`

type FramerSliderProps = {} & React.PropsWithChildren
const FramerSlider: React.FC<FramerSliderProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [transformPercent, setTransformPercent] = useState(-150)
  const baseX = useMotionValue(0)
  const baseVelocity = -1
  const x = useTransform(baseX, (v) => `${wrap(0, transformPercent, v)}%`)

  const directionFactor = useRef<number>(1)
  const prevT = useRef<number>(0)

  useEffect(() => {
    if (ref) {
      const diff = (ref.current?.scrollWidth! + 32) / ref.current?.offsetWidth!
      const transform = (diff * -100) / 2
      setTransformPercent(transform)
    }
  }, [ref])

  useAnimationFrame((t) => {
    if (!prevT.current) {
      prevT.current = t
    }

    const timeDelta = t - prevT.current
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000)

    moveBy += directionFactor.current * moveBy

    baseX.set(baseX.get() + moveBy)

    prevT.current = t
  })

  return (
    <Wrapper>
      <SliderTrack style={{ x }}>
        <CardWrapper ref={ref}>{children}</CardWrapper>
      </SliderTrack>
    </Wrapper>
  )
}

export default FramerSlider
