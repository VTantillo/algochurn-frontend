import { COLORS } from '@lib/design-tokens'
import React from 'react'
import styled from 'styled-components'
import SliderCard from './SliderCard'
import SliderGrid from './SliderGrid'
import { cardDetails } from './details'

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.ocean};
  display: grid;
  place-content: center;
`

const Heading = styled.h1`
  color: ${COLORS.white};
  font-size: 128px;
  text-align: center;
`

const InfiniteSlider: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Infinite Slider</Heading>
      <SliderGrid>
        {cardDetails.map((card) => (
          <SliderCard key={card.id} cardDetails={card} />
        ))}

        {cardDetails.map((card) => (
          <SliderCard key={card.id + cardDetails.length} cardDetails={card} />
        ))}
      </SliderGrid>
    </Wrapper>
  )
}

export default InfiniteSlider
