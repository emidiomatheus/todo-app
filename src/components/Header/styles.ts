import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 3rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile {
      display: flex;
      align-items: center;
      gap: 1.75rem;
    }
  }
`