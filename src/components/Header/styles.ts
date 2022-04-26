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

      svg {
        cursor: pointer;
        transition: filter .2s;

        &:hover {
          filter: brightness(2)
        }
      }
    }
  }
`

export const AccountButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    width: 8rem;
    text-decoration: none;
    border-radius: .25rem;
  }
  
  a:first-child {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    transition-duration: .2s;
    transition-property: box-shadow transform;

    &:hover {
      box-shadow: 0 0 .6rem ${props => props.theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`