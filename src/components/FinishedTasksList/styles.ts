import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: 4rem auto 2rem;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;
  }

  span {
    display: inline-block;
    font-weight: 600;
  }
`

export const NewTaskButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: var(--yellow);
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
    filter: brightness(1.125);
  }
`