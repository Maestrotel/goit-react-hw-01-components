import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
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
