import PropTypes from 'prop-types';
import css from '../StatisticsItem/StatisticsItem.module.css';
import { randColor } from 'helpers/randomColor';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: randColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
