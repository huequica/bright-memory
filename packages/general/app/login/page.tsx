'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { useAlert } from '@/components';
import { LoginForm } from './components';

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
