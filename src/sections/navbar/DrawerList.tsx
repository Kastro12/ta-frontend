import { Box, Button } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';

interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon: SvgIconComponent;
    link: string;
  }[];
}

const DrawerList = ({ handleOpenDrawer, pages }: DrawerList) => {
  return (
    <Box
      className='drawerList'
      sx={{ width: 250 }}
      role='presentation'
      onClick={handleOpenDrawer}
      style={{ backgroundColor: '#21817d', height: '100%', color: '#f5f5f5' }}
    >
      {pages.map((page) => (
        <Button
          className='mobile-button'
          key={page.name}
          sx={{
            ...button,
            ...transparentLightButton,
            ...{
              my: 2,
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: 3,
            },
          }}
          startIcon={<page.icon />}
          LinkComponent={Link}
          href={page.link}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};

export default DrawerList;
