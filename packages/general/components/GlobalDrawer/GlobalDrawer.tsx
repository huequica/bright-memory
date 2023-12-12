import { FC, ReactNode } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';

interface DrawerEntry {
  label: string;
  icon?: ReactNode;
  link: string;
}

interface Props {
  open: boolean;
  onMove: (destination: string) => void;
  onClose: () => void;
  onLogout: () => void;
}

export const GlobalDrawer: FC<Props> = ({
  open,
  onMove,
  onClose,
  onLogout,
}) => {
  const entries: DrawerEntry[] = [
    {
      label: 'Entries',
      icon: <EventNoteIcon />,
      link: '/',
    },
  ];

  return (
    <Drawer open={open} onClose={onClose}>
      <Box>
        <List>
          {entries.map((entry, index) => (
            <ListItem key={`entry-${index}`}>
              <ListItemButton
                onClick={() => {
                  onMove(entry.link);
                  onClose();
                }}
              >
                <ListItemIcon>{entry.icon}</ListItemIcon>

                <ListItemText primary={entry.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          <ListItem>
            <ListItemButton onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText primary={'Logout'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
