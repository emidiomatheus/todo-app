import styled from 'styled-components';

export const ContainerInput = styled.input`
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    border: 2px solid ${props => props.theme.colors.gray[400]};
    background: ${props => props.theme.colors.terciary};
    color: ${props => props.theme.colors.text};
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${props => props.theme.colors.gray[400]};
      font-weight: 600;
      font-size: .9rem;
    }

    &:focus {
      outline: 0;
      border-color: ${props => props.theme.colors.gray[300]}
    }
`

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 1rem;

  input + & {
    margin-top: 1.5rem;
  }
`