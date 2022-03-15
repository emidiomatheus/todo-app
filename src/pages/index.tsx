import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { Tasks } from '../components/Tasks'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <Tasks />
      </main>
      <GlobalStyle /> 
    </>
  )
}

export default Home
