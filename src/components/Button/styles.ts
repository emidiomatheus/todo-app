import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${props => props.theme.colors.primary};
  border: 0;
  border-radius: .25rem;
  padding: .8rem 1.5rem;
  
  color: #FFF;
  font-size: 1rem;
  font-weight: 600;
  transition: filter .2s;

  &:hover {
    filter: brightness(1.2)
  }
`