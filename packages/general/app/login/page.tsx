'use client';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { LoginForm } from './components';
import { useAlert } from '@/components';
import { useRouter } from 'next/navigation';

const LoginPage: NextPage = () => {
  const { open } = useAlert();
  const router = useRouter();

  return (
    <LoginForm
      onSubmit={async (values) => {
        signIn('signIn', {
          redirect: false,
          id: values.loginName,
          password: values.password,
        })
          .then((res) => {
            if (res?.error) {
              open('error', 'error occurred');
            } else {
              open('success', 'login successfully');
              router.push('/');
            }
          })
          .catch((error) => {
            open('error', 'error occurred');
            console.error(error);
          });
      }}
    />
  );
};

export default LoginPage;
