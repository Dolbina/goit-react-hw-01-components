import PropTypes from 'prop-types';
import { InfoList } from './StatList.slyled';

export const StatList = ({
  item: {
    label, percentage
  } }) => {
  return (
      <InfoList>
        <span>{label}</span>
        <span>{percentage}%</span>
      </InfoList>
  );
};

StatList.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};


