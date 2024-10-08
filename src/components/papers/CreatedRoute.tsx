import * as React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { button, greenButton } from '@/utils/re-styledComponents';
import Link from 'next/link';
import { Activity } from '@/utils/interfaces';
import allActivities from '@/data/activities/allActivities';

interface SliderBarProps {
  data: {
    id: string;
    title: string;
    description: string;
    link: string;
    activities: { id: string }[];
  };
}

export default function CreatedRoute({ data }: SliderBarProps) {
  const uniqueActivities = data?.activities.map((activity: { id: string }) => {
    return allActivities.find((all: Activity) => all.id == activity.id);
  });

  let fourActivities = uniqueActivities.slice(0, 4);

  return (
    <div className='CreatedRouteComponent'>
      <Box className='content'>
        <Typography variant='h3'>
          <Link href={data.link}>{data.title}</Link>
        </Typography>
        <Typography variant='body1' className='text'>
          {data.description}
        </Typography>

        <div className='list-wrapper'>
          <Typography variant='body1' className='list-title'>
            Activities
          </Typography>
          <ul>
            {fourActivities.map((activity: Activity | undefined) => (
              <li key={activity?.title}>{activity?.title}</li>
            ))}

            <li>...</li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            sx={{ ...button, ...greenButton }}
            variant='outlined'
            LinkComponent={Link}
            href={data.link}
            className='link-button'
          >
            Read more
          </Button>
        </div>
      </Box>
    </div>
  );
}
