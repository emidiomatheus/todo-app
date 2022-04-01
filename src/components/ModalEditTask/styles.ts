import { Form as Unform } from '@unform/web';
import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Form = styled(Unform)`
  h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 2px solid var(--gray-400);
    background: var(--gray-800);
    color: var(--text);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-400);
      font-weight: 600;
      font-size: .9rem;
    }

    &:focus {
      outline: 0;
      border-color: var(--gray-300)
    }

    & + input {
      margin-top: 1rem;
    }
  }

  .buttons {
    margin-top: 1.5rem;
    
    button {
    color: var(--text);
    font-size: 1rem;
    border: 0;
    height: 3rem;
    padding: 0 2em;
    border-radius: .5rem;
  }

  button + button {
    margin-left: 1rem
  }

  button[type="button"] {
    background-color: var(--gray-400);
    transition: background-color .2s;

    &:hover {
      background-color: var(--gray-500)
    }
  }

  button[type="submit"] {
    background-color: var(--yellow);
    transition: filter .2s;

    &:hover {
      filter: brightness(1.125)
    }
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
  border: 1px solid var(--gray-500);
  border-radius: 0.5rem;
  
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
    color: var(--text)
  }
`