import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { darken } from "polished";
import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  border-radius: .25rem;
  padding: .25rem .5rem;

  &:hover, &:focus, &:active {
    background-color: ${props => props.theme.colors.gray[300]};
    color: ${props => props.theme.colors.background}
  }
`

export const DropdownContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  background-color: ${props => props.theme.colors.secundary};
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: .25rem;
  padding: .5rem 1rem;

  font-size: .825rem;

  svg {
    width: 1rem;
  }
`

export const IconButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: .25rem;
  padding: .25rem;

  background-color: ${props => props.theme.colors.secundary};
  transition: filter .2s;

  &:active {
    filter: brightness(1.3)
  }
`