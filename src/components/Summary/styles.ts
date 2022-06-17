import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 0 1rem;

  div.cards {
    display: flex;
    width: 100%;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    div.cards {
      overflow-x: scroll;
      gap: 1rem;
    }
  }
`