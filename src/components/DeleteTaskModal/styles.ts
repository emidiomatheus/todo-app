import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Button = styled.div`
  background-color: var(--gray-500);
  padding: 1rem 2rem;
  border-radius: .5rem;
  cursor: pointer;
  transition: filter .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover {
    filter: brightness(1.2)
  }
`

export const DeleteButton = styled(Button)`
  background-color: var(--red)
`