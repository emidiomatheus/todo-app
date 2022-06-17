import styled from 'styled-components';

interface ContainerProps {
  type: 'important' | 'urgent' | 'circumstantial';
}

const color = {
  important: '#0CCE6B',
  urgent: '#E83151',
  circumstantial: '#F0A202',
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1048px;
  background-color: ${props => props.theme.colors.secundary};
  
  padding: 1rem 2rem;
  border-radius: .25rem;
  border-left: .5rem solid;
  border-left-color: ${props => color[props.type]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  p {
    width: 40%;
  }

  time {
    color: ${props => props.theme.colors.text};
    text-transform: capitalize;
  }

  span {
    color: ${props => color[props.type]};
    font-weight: 400;
    text-align: center;
    width: 100px;
    opacity: .8;

    @media (max-width: 468px) {
      display: none;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    > i {
      cursor: pointer;
      background-color: ${props => props.theme.colors.secundary};
      padding: .5rem;
      border-radius: .25rem;
      transition: filter .2s;

      &:hover {
        filter: brightness(1.3)
      }

      &:active {
        filter: brightness(1.6)
      }

      @media (max-width: 468px) {
        padding: 0;
      }
    }
  }
`