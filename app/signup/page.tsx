'use client'
import { Seo } from '@/components/Seo';
import { useRouter } from 'next/navigation';
import { SignupForm } from './signup-form';


export default function SignupPage() {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = "/confirm-password"; 
    router.push(redirect);
  }

  return (
    <>
      <Seo title="Sign Up" />
      <SignupForm onSuccess={onSuccess} />
    </>
  )
}

