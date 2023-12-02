'use client';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { LoginForm } from './components';

const LoginPage: NextPage = () => {
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
              window.alert('error');
            }
          })
          .catch((error) => {
            window.alert('error occurred');
            console.error(error);
          });
      }}
    />
  );
};

export default LoginPage;
