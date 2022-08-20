import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { IconButton } from '../IconButton';
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

  const { title } = useTheme()
  
  return (
    <Container>
      <div className="container">
        <Logo />
        <div className="profile">
          {!isHome && session ? (
            <>
              <span>{`Olá, ${session.user?.name?.split(" ")[0]}!`}</span>
              <Switch toggleTheme={toggleTheme} checked={title === 'light'} />
              <IconButton icon={FiLogOut} onClick={() => signOut()} aria-label="Sair" title="Sair" />
            </>
          ): (
            <AccountButtonsContainer>
              <Switch toggleTheme={toggleTheme} checked={title === 'light'} />
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