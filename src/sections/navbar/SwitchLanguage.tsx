'use client';
import { usePathname as useNavigationPathname } from 'next/navigation';
import { usePathname } from '@/i18n/routing';
import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Tooltip } from '@/components';
import { useTranslations } from 'next-intl';

const ItemActive = {
  backgroundColor: 'rgba(33, 129, 125, 0.06)',
  hover: {
    backgroundColor: '#fff',
  },
};

const ItemLinkStyle = {
  fontSize: '15px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '6px 12px',
};

const ActiveItemLinkStyle = {
  cursor: 'auto !important',
  hover: {
    backgroundColor: '#fff',
  },
};

const ItemImageStyle = { fontSize: '24px', borderRadius: '100px', marginRight: '9px' };

const SwitchLanguage = () => {
  const globalT = useTranslations('global');

  const pathname = usePathname();

  const navigationPathname = useNavigationPathname();
  const locale = navigationPathname.split('/')[1];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={globalT('Change language')}>
        <IconButton
          sx={{ ...button, ...transparentLightButton, p: '12px!important' }}
          id='shoppingCartIcon'
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          size='small'
        >
          <Image
            src={`/icons/${locale === 'en' ? 'en' : 'sr'}.png`}
            alt={`${locale} flag`}
            width={24}
            height={24}
            style={{ fontSize: '24px', borderRadius: '100px' }}
          />
        </IconButton>
      </Tooltip>
      <Menu id='language-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={handleClose}
          sx={{ p: 0 }}
          style={{ ...(locale === 'sr' ? ItemActive : {}) }}
        >
          <Link
            href={`${pathname}`}
            locale='sr'
            style={{ ...ItemLinkStyle, ...(locale === 'sr' ? ActiveItemLinkStyle : {}) }}
          >
            <Image
              src={`/icons/sr.png`}
              alt={`sr flag`}
              width={19}
              height={19}
              style={{ ...ItemImageStyle }}
            />
            Srpski
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ p: 0 }}
          style={{ ...(locale === 'en' ? ItemActive : {}) }}
        >
          <Link
            href={`${pathname}`}
            locale='en'
            style={{ ...ItemLinkStyle, ...(locale === 'en' ? ActiveItemLinkStyle : {}) }}
          >
            <Image
              src={`/icons/en.png`}
              alt={`en flag`}
              width={19}
              height={19}
              style={{ ...ItemImageStyle }}
            />
            English
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SwitchLanguage;
