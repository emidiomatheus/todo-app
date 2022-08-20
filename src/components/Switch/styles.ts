import * as Switch from '@radix-ui/react-switch';
import styled from "styled-components";

export const SwitchRoot = styled(Switch.Root)`
  width: 4rem;
  height: 2rem;
  background-color: ${props => props.theme.colors.gray[800]};
  border: 0;
  border-radius: 999px;

  &[data-state="checked"] { 
    background-color: ${props => props.theme.colors.gray[900]}
  }
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  background-color: white;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  margin-left: 3px;
  margin-bottom: 1px;
  transition: transform .2s;

  &[data-state="checked"] { 
    transform: translateX(2rem)
  }
`