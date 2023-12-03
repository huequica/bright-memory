'use client';
import { Snackbar } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { AlertType, Alert } from './Alert';

type Opener = (type: AlertType, message: string) => Promise<void>;

const Context = createContext<{
  open: Opener;
} | null>(null);

const _useContext = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error('useAlert must be used with in AlertProvider!');
  }
  return ctx;
};

export const useAlert = () => {
  return _useContext();
};

export const AlertProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<
    { type: AlertType; message: string } | undefined
  >(undefined);

  return (
    <Context.Provider
      value={{ open: async (type, message) => setState({ type, message }) }}
    >
      <Snackbar
        open={!!state}
        autoHideDuration={6000}
        onClose={() => {
          setState(undefined);
        }}
      >
        <div>{state && <Alert type={state.type}>{state.message}</Alert>}</div>
      </Snackbar>
      {children}
    </Context.Provider>
  );
};
