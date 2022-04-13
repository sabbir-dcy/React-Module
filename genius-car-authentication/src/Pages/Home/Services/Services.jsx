
import { useContext } from 'react'
import { dataContext} from '../../../hooks/UseData'

import Service from '../Service/Service'
import * as S from './Services.styled'

const Services = () => {
  const services = useContext(dataContext).services

  return (
    <div id='services'>
      <h2 className='text-primary text-center m-5'>Our Services</h2>
      <S.Container>
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </S.Container>
    </div>
  )
}

export default Services
