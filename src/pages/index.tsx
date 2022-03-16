import type { NextPage } from 'next'
import { IconContext } from 'react-icons'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { Tasks } from '../components/Tasks'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  return (
    <IconContext.Provider value={{ color: 'var(--gray-300)', size: '1.5rem' }}>
      <Header />
      <main>
        <Summary />
        <Tasks />
      </main>
      <GlobalStyle /> 
    </IconContext.Provider>
  )
}

export default Home
