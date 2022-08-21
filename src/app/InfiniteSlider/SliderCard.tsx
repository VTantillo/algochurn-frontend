import React from 'react'
import styled from 'styled-components'
import { SliderCardDetails } from './details'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 8px;
  min-width: var(--card-width, 100px);
  height: 300px;
  padding: 48px;
  justify-content: space-between;
  border-radius: 8px;
  transition: transform 0.25s;

  &:hover {
    transform: scale(105%);
  }
`

const CardContent = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 32px;
`

const CardAvatar = styled.a`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  line-height: 0;
`

type SliderCardProps = {
  cardDetails: SliderCardDetails
}
const SliderCard: React.FC<SliderCardProps> = ({ cardDetails }) => {
  return (
    <Wrapper>
      <CardContent>{cardDetails.content}</CardContent>

      <CardFooter>
        <CardAvatar href={cardDetails.href}>
          <Avatar src={cardDetails.avatar} alt={`${cardDetails.name} avatar`} />
        </CardAvatar>

        <p>{cardDetails.name}</p>
      </CardFooter>
    </Wrapper>
  )
}

export default SliderCard
