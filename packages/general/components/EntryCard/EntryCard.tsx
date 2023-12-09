import { FC } from 'react';
import Link from 'next/link';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  IconButton,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import NoteAlt from '@mui/icons-material/NoteAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { LinkLabel } from '@/components/Label/LinkLabel';
import { Entry } from '@/apiClient';

interface Props {
  entry: Entry;
  onRemove: (entry: Entry) => void;
  onFavorite: (entry: Entry, remove: boolean) => void;
}

export const EntryCard: FC<Props> = ({ entry, onRemove, onFavorite }) => {
  const note = entry.note;

  return (
    <Card sx={{ width: 400, minHeight: 'fit-content' }}>
      <Link href={entry.url}>
        <CardMedia
          component="img"
          height={140}
          image={entry.ogpImageLink || undefined}
        />
      </Link>

      <CardContent>
        <LinkLabel link={entry.url} label={entry.title} />

        {!!note && (
          <Card
            component="div"
            elevation={3}
            sx={{
              padding: '8px',
              width: 'auto',
            }}
          >
            <NoteAlt fontSize="medium" /> note
            <Typography
              variant="body1"
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {note}
            </Typography>
          </Card>
        )}
      </CardContent>

      {/*<Paper*/}
      {/*  sx={{*/}
      {/*    display: 'flex',*/}
      {/*    justifyContent: 'left',*/}
      {/*    flexWrap: 'wrap',*/}
      {/*    listStyle: 'none',*/}
      {/*    p: 0.5,*/}
      {/*    m: 2,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <SellIcon sx={{ m: 0.5 }} />*/}
      {/*  /!** TODO: Tag 実装完了したら戻す **!/*/}
      {/*  <TagChips tags={entry.tags} />*/}
      {/*</Paper>*/}

      <CardActions>
        <Tooltip title="Favorite">
          <IconButton
            color={entry.isFavorite ? 'primary' : 'default'}
            onClick={() => {
              onFavorite(entry, entry.isFavorite);
            }}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              onRemove(entry);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
