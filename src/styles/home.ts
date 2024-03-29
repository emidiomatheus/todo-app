import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1048px;
  margin: 2rem auto 0;
  padding: 0 1rem;
`

export const HeroSection = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 468px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.text};
    opacity: .8;
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

  @media (max-width: 468px) {
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
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
    bottom: 1rem;
    left: 0;
    z-index: -1;

    @media (max-width: 468px) {
      bottom: 15rem;
    }
  }

  @media (max-width: 468px) {
    width: 100%;
  }
`