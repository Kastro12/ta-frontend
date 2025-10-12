import Link from 'next/link';
import { useTranslations } from 'next-intl';

const VacationWithCurrentActivity = ({
  data,
}: {
  data: { translationKey: string; link: string };
}) => {
  const organizedVacationsT = useTranslations(data?.translationKey);

  return (
    <Link
      style={{
        display: 'inline-block',
        color: '#21817d',
        textDecoration: 'underline',
      }}
      href={data.link}
    >
      {organizedVacationsT('title')}
    </Link>
  );
};

export default VacationWithCurrentActivity;
