'use client';
import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Add from '@mui/icons-material/Add';
import { useAlert } from '@/components';

interface Props {
  children: React.ReactNode;
}

export const Default: React.FC<Props> = ({ children }) => {
  const { open } = useAlert();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Bright-Memory
            </Typography>

            <Button
              color="inherit"
              startIcon={<Add />}
              onClick={async () => {
                await open('info', 'WIP');
              }}
            >
              Create New Entry
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ m: 2 }}>{children}</Box>
    </>
  );
};
