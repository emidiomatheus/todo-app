import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  .buttons {
    margin-top: 1.5rem;
    display: flex;
    
    button {
      height: 3rem;
      padding: 0 2em;

      @media (max-width: 468px) {
        width: 50%;
      }
    }

    button + button {
      margin-left: 1rem;
    }

    button[type="button"] {
      background-color: ${props => props.theme.colors.gray[400]};
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red' | 'yellow';
}

const colors = {
  red: '#E83151',
  green: '#0CCE6B',
  yellow: '#F0A202'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 2px solid ${props => props.theme.colors.gray[500]};
  border-radius: 0.25rem;
  
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

  img {
    width: 20px;
    height: 20px;
  }
  
  span {
    display: inline-block;
    font-size: .9rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text}
  }
`