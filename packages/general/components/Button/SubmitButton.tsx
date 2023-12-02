import { Button } from './Button';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const SubmitButton: FC<Props> = ({ children }) => {
  return (
    <Button variant={'contained'} type={'submit'}>
      {children ?? '送信'}
    </Button>
  );
};
