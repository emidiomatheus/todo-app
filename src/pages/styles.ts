import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1048px;
  margin: 2rem auto 0;
`

export const HeroSection = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  gap: 2rem;
`

export const TextContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray-300);
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    max-width: 12rem;
    text-decoration: none;
    border-radius: .25rem;

    line-height: 1.75;
    
    background-color: ${props => props.theme.colors.primary};
    color: var(--text);
    font-weight: 600;
    transition-duration: .2s;
    transition-property: box-shadow transform;

    &:hover {
      box-shadow: 0 0 .6rem ${props => props.theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;

  img {
    border-radius: 10px;
  }

  div:first-child {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    filter: blur(100px);
    position: absolute;
    top: 0;
    right: 0;
  }

  div:last-child {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    filter: blur(100px);
    position: absolute;
    bottom: 20rem;
    left: 0;
    z-index: -1;
  }
`