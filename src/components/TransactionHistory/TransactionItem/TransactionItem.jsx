import PropTypes from 'prop-types';
import css from '../TransactionItem/TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td className={css.col}>{type}</td>
      <td className={css.col}>{amount}</td>
      <td className={css.col}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
