import { Paper } from '@mui/material';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface EmptyActivityListProps {
  handleOpenDrawer: () => void;
}

const EmptyActivityList = ({ handleOpenDrawer }: EmptyActivityListProps) => {
  const globalT = useTranslations('global');

  return (
    <Paper elevation={3} role='application' className='shoppingCartActivityList EmptyActivityList'>
      <Link href={'/create-vacation#activity_offer_position'} onClick={handleOpenDrawer}>
        <li>
          <div className={`image-wrap`}>
            <ImageNotSupportedOutlinedIcon />
          </div>

          <div className='content'>
            <div className='info'>
              <p>{globalT('no chosen activity')}</p>
            </div>
          </div>
        </li>
      </Link>
    </Paper>
  );
};

export default EmptyActivityList;
