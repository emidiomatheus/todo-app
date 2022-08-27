import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { Button } from '../Button';
import { FaGoogle } from 'react-icons/fa';

interface SignInButtonProps {
  children: ReactNode;
}

export function SignInButton({children}: SignInButtonProps) {
  const [loading, setLoading] = useState(false);
  const {data: session} = useSession()
  const router = useRouter()
  
  function handleSignIn() {
    setLoading(true)

    if (session) {
      router.push('/dashboard')
      return;
    }

    signIn('google', {callbackUrl: '/dashboard'})
  }
  
  return (
    <Button type="button" onClick={handleSignIn} loading={loading}>
      <FaGoogle color="#FFF" />
      {children}
    </Button>  
  )
}