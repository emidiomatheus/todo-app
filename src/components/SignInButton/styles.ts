import styled from 'styled-components';

export const Box = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};
  border: 0;
  border-radius: .25rem;
  padding: .8rem 1.5rem;
  
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  transition: filter .2s;

  &:hover {
    filter: brightness(1.2)
  }
`