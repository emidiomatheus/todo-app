import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
          <IconContext.Provider value={{ color: 'var(--gray-300)', size: '1.5rem' }}>
            <Component {...pageProps} />
          </IconContext.Provider>
    </QueryClientProvider>
  )
}

export default MyApp
