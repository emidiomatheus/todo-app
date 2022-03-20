import { darken, transparentize } from "polished";
import styled from "styled-components";

const colors = {
  red: '#E83151',
  green: '#0CCE6B',
  yellow: '#F0A202'
}

interface Props {
  name: string;
  isActive: boolean;
  activeColor: 'green' | 'red' | 'yellow';
}

type RadioBoxProps = JSX.IntrinsicElements['div'] & Props
export const RadioBoxType = styled.div<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--gray-500);
  border-radius: 0.5rem;
  cursor: pointer;
  
  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color .2s;
  outline: none;
  
  &:hover, &:focus {
    border-color: ${darken(0.1, '#d7d7d7')};
    outline: none;
  }
  
  span {
    display: inline-block;
    font-size: .9rem;
    font-weight: 600;
    color: var(--text)
  }
`