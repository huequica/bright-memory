import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import { ButtonProps } from '@mui/material';

export const Button: FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />;
};
