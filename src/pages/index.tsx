import type { GetStaticProps, NextPage } from 'next'
import { IconContext } from 'react-icons'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { Tasks } from '../components/Tasks'
import { GlobalStyle } from '../styles/global'
import { connectToDatabase } from '../utils/mongodb'

const Home: NextPage = ({ tasks }) => {
  return (
    <IconContext.Provider value={{ color: 'var(--gray-300)', size: '1.5rem' }}>
      <Header />
      <main>
        {/* <ul>
          {movies.map(movie => (
            <li key={movie._id}>
              <h2>{movie.teste}</h2>
            </li>
          ))}
        </ul> */}
        <Summary />
        <Tasks />
      </main>
      <GlobalStyle /> 
    </IconContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { db, client } = await connectToDatabase()

  const tasks = await db.collection('tasks').find({}).toArray()

  console.log(tasks)
  
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks))
    }
  }
}

export default Home
