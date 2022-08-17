import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Button } from '../Button';

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

    signIn('google', {callbackUrl: '/dashboard'})
  }
  
  return (
    <Button type="button" onClick={handleSignIn}>
      {children}
    </Button>  
  )
}