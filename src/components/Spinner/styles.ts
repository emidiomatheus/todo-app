import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: inline-block;
  border-radius: 999px;
  border-color: white;
  border-style: solid;
  border-width: 3px;
  border-bottom-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spin} 1s linear infinite
`