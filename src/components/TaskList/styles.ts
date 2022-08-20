import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: 4rem auto 2rem;
  padding: 0 1rem;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    > span {
      display: inline-block;
      font-weight: 600;
    }
  }
`