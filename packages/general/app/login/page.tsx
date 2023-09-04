import { NextPage } from 'next';
import { LoginForm } from './components';

const LoginPage: NextPage = () => {
  return <LoginForm onSubmit={(values) => console.debug(values)} />;
};

export default LoginPage;
