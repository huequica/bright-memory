import { Alert as MUIAlert, AlertProps, AlertTitle } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type AlertType = NonNullable<AlertProps['severity']>;
type AlertOnClose = NonNullable<AlertProps['onClose']>;

interface Props {
  type: AlertType;
  onClose: AlertOnClose;
}

export const Alert: FC<PropsWithChildren<Props>> = ({
  type,
  onClose,
  children,
}) => {
  const Titles = {
    success: 'Success',
    error: 'Error',
    info: 'Info',
    warning: 'Warning',
  } as const satisfies Record<AlertType, string>;

  return (
    <MUIAlert severity={type} onClose={onClose}>
      <AlertTitle>{Titles[type]}</AlertTitle>
      {children}
    </MUIAlert>
  );
};
