import { Paper } from '@mui/material';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import Link from 'next/link';

interface EmptyActivityListProps {
  handleOpenDrawer: () => void;
}

const EmptyActivityList = ({ handleOpenDrawer }: EmptyActivityListProps) => {
  return (
    <Paper elevation={3} role='application' className='shoppingCartActivityList EmptyActivityList'>
      <Link href={'/create-vacation#activity_offer_position'} onClick={handleOpenDrawer}>
        <li>
          <div className={`image-wrap`}>
            <ImageNotSupportedOutlinedIcon />
          </div>

          <div className='content'>
            <div className='info'>
              <p>There is no chosen activity</p>
            </div>
          </div>
        </li>
      </Link>
    </Paper>
  );
};

export default EmptyActivityList;
