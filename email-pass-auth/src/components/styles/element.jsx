import styled from 'styled-components'

export const Styledinput = styled.input`
  background-color: ${(props) => (props.primary ? '#4d94ff' : '#979797')};
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
