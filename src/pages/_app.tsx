import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
      localStorage.setItem('theme', JSON.stringify(light))
    } 
    
    if (theme.title === 'light') {
      setTheme(dark)
      localStorage.setItem('theme', JSON.stringify(dark))
    }
  }

  useEffect(() => {
    const themeValue = localStorage.getItem('theme')
    if (themeValue) {
      setTheme(JSON.parse(themeValue))
    }
  }, [])
  
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ color: 'var(--gray-300)', size: '24px' }}>
          <Header toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </IconContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </NextAuthProvider>
  )
}

export default MyApp
