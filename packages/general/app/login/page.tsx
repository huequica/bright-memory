'use client';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { LoginForm } from './components';
import { useAlert } from '@/components';

const LoginPage: NextPage = () => {
  const { open } = useAlert();

  return (
    <LoginForm
      onSubmit={async (values) => {
        signIn('signIn', {
          callbackUrl: '/',
          id: values.loginName,
          password: values.password,
        })
          .then((res) => {
            if (res?.error) {
              open('error', 'error occurred');
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
