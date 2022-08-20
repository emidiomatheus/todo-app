import styled from "styled-components";

export const Box = styled.button`
  background-color: ${props => props.theme.colors.secundary};
  border: 0;
  border-radius: .25rem;
  padding: .5rem;

  transition: filter .2s;

  &:hover, &:focus {
    filter: brightness(1.3)
  }

  &:active {
    filter: brightness(1.6)
  }
`