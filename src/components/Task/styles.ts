import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1048px;
  background-color: var(--gray-800);
  
  padding: 1rem 2rem;
  border-radius: .5rem;
  border-left: .5rem solid var(--green);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    > i {
      cursor: pointer;
      background-color: var(--gray-800);
      padding: .5rem;
      border-radius: .5rem;
      transition: filter .2s filter .4s;

      &:hover {
        filter: brightness(1.3)
      }

      &:active {
        filter: brightness(1.6)
      }
    }
  }
`