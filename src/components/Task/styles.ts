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
  background-color: var(--gray-800);
  
  padding: 1rem 2rem;
  border-radius: .5rem;
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
    color: var(--gray-300);
    text-transform: capitalize;
  }

  span {
    color: ${props => color[props.type]};
    font-weight: 400;
    text-align: center;
    width: 100px;
    opacity: .8;
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
      transition: filter .2s;

      &:hover {
        filter: brightness(1.3)
      }

      &:active {
        filter: brightness(1.6)
      }
    }
  }
`