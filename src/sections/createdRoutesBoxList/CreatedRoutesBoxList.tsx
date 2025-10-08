'use client';
import { CreatedRoute } from '@/components';

interface CreatedRoutesBox {
  serverData: {
    id: string;
    link: string;
    activities: { id: string }[];
    translationKey: string;
  }[];
}

const CreatedRoutesBoxList = ({ serverData }: CreatedRoutesBox) => {
  return (
    <div className='CreatedRouteComponent_wrap'>
      {serverData && serverData.map((data) => <CreatedRoute data={data} key={data.id} />)}
    </div>
  );
};

export default CreatedRoutesBoxList;
