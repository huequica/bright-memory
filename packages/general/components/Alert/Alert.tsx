import { Alert as MUIAlert, AlertProps, AlertTitle } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type AlertType = NonNullable<AlertProps['severity']>

interface Props {
  type: AlertType;
}

export const Alert: FC<PropsWithChildren<Props>> = (props) => {
  const Titles = {
    success: 'Success',
    error: 'Error',
    info: 'Info',
    warning: 'Warning'
  } as const satisfies Record<AlertType, string>

  return (
    <MUIAlert severity={props.type}>
      <AlertTitle>{Titles[props.type]}</AlertTitle>
      {props.children}
    </MUIAlert>
  );
};
