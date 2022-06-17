import { NextPage } from "next";
import Image from "next/image";
import { SignInButton } from "../components/SignInButton";
import { HeroSection, ImageContainer, MainContainer, TextContainer } from "../styles/home";

const Home: NextPage = () => {
  return (
    <>
      <MainContainer>
        <HeroSection>
          <TextContainer>
            <h1>Gerencie seu tempo como nunca</h1>
            <p>
              A união da melhor plataforma com a melhor metodologia vai te ajudar a otimizar muito mais o seu tempo.
            </p>
            <SignInButton>Começar agora</SignInButton>
          </TextContainer>
          <ImageContainer>
            <div></div>
            <Image src="/images/main-image.png" width={1000} height={620} alt="Captura de tela do dashboard da To.do" />
            <div></div>
          </ImageContainer>
        </HeroSection>
      </MainContainer>
    </>
  )
}

export default Home