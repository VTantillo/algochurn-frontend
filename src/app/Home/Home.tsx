import styled from 'styled-components'
import { COLORS } from '@lib/design-tokens'

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.ocean};
  display: grid;
  place-content: center;
`

const Heading = styled.h1`
  color: ${COLORS.white};
  font-size: 128px;
`

type HomeProps = {}
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Wrapper>
      <Heading>Get To Hacking! </Heading>
    </Wrapper>
  )
}

export default Home
