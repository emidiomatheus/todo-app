import { NextPage } from "next";
import Image from "next/image";
import { SignInButton } from "../components/SignInButton";
import { Features, HeroSection, ImageContainer, MainContainer, TextContainer } from "./styles";

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
        <Features>
            <div className="text">
              <h2>Diferencie suas tarefas por grau de urgência</h2>
              <p>
                Separe suas tarefas por: Importante, Circunstancial e Urgente. Dessa forma, é mais fácil não se perder com as suas prioridades.
              </p>
            </div>
            <div className="image">
              <img src="/images/tasks.png" />
            </div>
          </Features>
          <Features>
            <div className="image">
              <img src="/images/summary.png" />
            </div>
            <div className="text">
              <h2>Diferencie suas tarefas por grau de urgência</h2>
              <p>
                Separe suas tarefas por: Importante, Circunstancial e Urgente. Dessa forma, é mais fácil não se perder com as suas prioridades.
              </p>
            </div>
          </Features>
      </MainContainer>
    </>
  )
}

export default Home