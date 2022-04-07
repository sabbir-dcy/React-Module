import styled from 'styled-components'

export const StyledBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: ${({ bg }) => bg};
  color: white;
  cursor: pointer;

  :hover {
    background-color : ${({hoverBg})=> hoverBg};
  }
`
export const StyledTitle = styled.h2`
  color: #2c2c2c;
`
export const UserImg = styled.img`
  width:100px;
  border-radius:50%;
`
export const StyledCard = styled.div`
  width: 500px;
  height: 300px;
  background-color: lightsteelblue;
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const StyledBtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`
