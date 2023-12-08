import { FC } from 'react';
import Link from 'next/link';
import { Link as MUILink, Typography } from '@mui/material';

interface LinkLabelProps {
  link: string;
  label: string;
}

export const LinkLabel: FC<LinkLabelProps> = ({ link, label }) => {
  return (
    <Link legacyBehavior passHref href={link}>
      <MUILink target="_blank" rel="noreferrer" underline="none" href={link}>
        <Typography gutterBottom variant="h4" component="div">
          {label}
        </Typography>
      </MUILink>
    </Link>
  );
};
