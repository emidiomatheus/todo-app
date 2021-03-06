import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Box } from './styles';

interface SignInButtonProps {
  children: ReactNode;
}

export function SignInButton({children}: SignInButtonProps) {
  const {data: session} = useSession()
  const router = useRouter()
  
  function handleSignIn() {
    if (session) {
      router.push('/dashboard')
      return;
    }

    signIn('google', {callbackUrl: 'https://todo-app-blue-psi.vercel.app/dashboard'})
  }
  
  return (
    <Box type="button" onClick={handleSignIn}>
      {children}
    </Box>  
  )
}