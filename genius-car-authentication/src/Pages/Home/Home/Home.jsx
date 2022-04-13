import Banner from '../Banner/Banner'
import Experts from '../Experts/Experts'
import { UseData } from '../../../hooks/UseData'
import Services from '../Services/Services'

import * as S from './Home.styled'

const Home = () => {
  return (
    <S.Container id='home'>
      <UseData>
        <Banner></Banner>
        <Services></Services>
        <Experts></Experts>
      </UseData>
    </S.Container>
  )
}

export default Home
