'use client';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
import { GlobalDrawer } from '@/components/GlobalDrawer/GlobalDrawer';
import { useAlert } from '@/components';

interface Props {
  children: React.ReactNode;
}

export const Default: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { open: openAlert } = useAlert();
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
              onClick={() => {
                setDrawerOpen((prev) => !prev);
              }}
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
                await openAlert('info', 'WIP');
              }}
            >
              Create New Entry
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <GlobalDrawer
        open={drawerOpen}
        onMove={(destination) => {
          router.push(destination);
        }}
        onClose={() => {
          setDrawerOpen((prev) => !prev);
        }}
        onLogout={async () => {
          await signOut();
        }}
      />

      <Box sx={{ m: 2 }}>{children}</Box>
    </>
  );
};
