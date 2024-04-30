import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { button, lightGreenButton, greenButton } from '@/utils/re-styledComponents';
import Link from 'next/link';
import { Activity } from '@/utils/interfaces';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

interface BoxOfActivity {
  data: Activity;
}

export default function BoxOfActivity({ data }: BoxOfActivity) {
  return (
    <Paper elevation={3} className='BoxOfActivity'>
      <Box className='content-wrapper'>
        <img src={data.imageLink} alt={data.title} loading='lazy' />
        <Box className='content'>
          <Box className='text'>
            <Typography variant='h3'>{data.title}</Typography>
            <Typography variant='body1' className='description'>
              {data.description}
            </Typography>
          </Box>
          <div className='buttons'>
            <Button
              sx={{ ...button, ...lightGreenButton }}
              variant='outlined'
              href={'./'}
              LinkComponent={Link}
              // size='small'
            >
              More info
            </Button>
            <Button
              sx={{ ...button, ...greenButton }}
              variant='outlined'
              href={'./'}
              LinkComponent={Link}
              startIcon={<AddShoppingCartOutlinedIcon />}
            >
              Choose
            </Button>
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
