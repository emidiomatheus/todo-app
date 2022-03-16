import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-800);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  min-height: 11rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
  }

  span {
    margin: auto 0;
    font-size: 4rem;
    font-weight: bold;
  }
`