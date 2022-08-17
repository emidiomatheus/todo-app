import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { Logo } from '../Logo';
import { SignInButton } from '../SignInButton';
import { Switch } from '../Switch';
import { AccountButtonsContainer, Container } from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { data: session } = useSession()
  const router = useRouter()

  const isHome = router.asPath === '/'

  const { colors, title } = useTheme()
  
  return (
    <Container>
      <div className="container">
        <Logo />
        <div className="profile">
          {!isHome && session ? (
            <>
              <span>{`Olá, ${session.user?.name?.split(" ")[0]}!`}</span>
              <Switch toggleTheme={toggleTheme} checked={title === 'light'} />
              {/* <Switch 
                onChange={toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={colors.gray[900]}
                offColor={colors.gray[800]}
              /> */}
              <FiLogOut onClick={() => signOut()} color="#505050" aria-label="Sair" title="Sair" />
            </>
          ): (
            <AccountButtonsContainer>
              <Switch toggleTheme={toggleTheme} checked={title === 'light'} />
              {/* <Switch 
                onChange={toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={colors.gray[900]}
                offColor={colors.gray[800]}
              /> */}
              <SignInButton>
                Entrar
              </SignInButton>
            </AccountButtonsContainer>
          )}
        </div>
      </div>
    </Container>
  )
}