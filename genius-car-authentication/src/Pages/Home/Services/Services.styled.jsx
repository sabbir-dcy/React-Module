import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 577px ) and (max-width: 992px) {
    grid-template-columns : repeat(2, 1fr);
  }
`
