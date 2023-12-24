import { FC, PropsWithChildren } from 'react';
import { Backdrop } from '@mui/material';

interface Props {
  open: boolean;
}

export const Loading: FC<PropsWithChildren<Props>> = ({ open }) => {
  return <Backdrop open={open} />;
};
