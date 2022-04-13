import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Service.styled'

const Service = ({ service }) => {
  const { name, img, description, price, id } = service

  const navigate = useNavigate()

  return (
    <S.Container>
      <img src={img} alt='' />
      <S.DetailGroup>
        <h3>{name}</h3>
        <p>price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
      </S.DetailGroup>
      <button onClick={() => navigate(`/service/${id}`)}>{name}</button>
    </S.Container>
  )
}

export default Service
