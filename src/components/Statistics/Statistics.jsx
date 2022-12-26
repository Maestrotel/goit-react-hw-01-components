import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(item => (
            <StatisticsItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
