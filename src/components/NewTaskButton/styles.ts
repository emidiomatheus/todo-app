import styled from "styled-components";

export const Box = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: var(--teal-700);
  color: var(--text);
  font-weight: 600;
  font-size: 1rem;
  line-height: .75;
  border: none;
  max-width: 8rem;
  max-height: 8rem;
  border-radius: .5rem;
  padding: .8rem 1.5rem;

  transition: filter .2s ease-out;

  &:hover {
    filter: brightness(1.2);
  }
`