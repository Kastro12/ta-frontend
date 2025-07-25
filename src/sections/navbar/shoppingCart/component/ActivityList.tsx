import { Paper, IconButton } from '@mui/material';
import { usePathname } from 'next/navigation';
import { button } from '@/utils/re-styledComponents/index';
import { removeActivityWithPersistence } from '@/store/vacation/vacationReducer';
import { useDispatch } from 'react-redux';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Image from 'next/image';
import { AppDispatch } from '@/store/store';

const ActivityList = ({ activity }: any) => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  let durationText = '';
  switch (activity.durationInDays) {
    case 1:
      durationText += '1 day';
      break;
    case 0.5:
      durationText += 'Half a day';
      break;
    default:
      durationText += `${activity.durationInDays} days`;
      break;
  }

  return (
    <Paper elevation={3} key={activity.id} role='application' className='shoppingCartActivityList'>
      <li>
        <div className={`image-wrap`}>
          <Image
            src={activity.images[0].link}
            alt={activity.images[0].alt}
            style={{ objectFit: 'cover', borderRadius: '4px' }}
            sizes='100vw'
            fill
          />
          {/* <img src={activity.images[0].link} /> */}
        </div>

        <div className='content'>
          <div className='info'>
            <p>{activity.title}</p>
            <div className='sub-info'>
              <span className='gray-label'>{activity.category}</span>
              <span className='gray-label'>{durationText}</span>
            </div>
          </div>

          {pathname !== '/book-vacation' && (
            <>
              <div className='action remove'>
                <IconButton
                  sx={{ ...button }}
                  id='shoppingCartIcon'
                  onClick={() => dispatch(removeActivityWithPersistence(activity.id))}
                  size='small'
                  title='Remove activity'
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </div>
            </>
          )}
        </div>
      </li>
    </Paper>
  );
};

export default ActivityList;
