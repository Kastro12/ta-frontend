import { InputSelect } from '@/forms/components';
import { getUniqueValues } from '@/utils/filterFunctions';
import allActivities from '@/data/allActivities';
import { Container, Typography, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  index: number;
  value: number;
}

const ChosenActivities = (props: TabPanelProps) => {
  const { value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>Chosen Activities</>}
    </div>
  );
};

export default ChosenActivities;
