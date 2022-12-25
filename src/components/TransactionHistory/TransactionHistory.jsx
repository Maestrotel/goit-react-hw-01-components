import { TransactionItem } from './TransactionItem/TransactionItem';
// import transactions from 'path/to/transactions.json';

// <TransactionHistory items={transactions} />;

export const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionItem />
      </tbody>
    </table>
  );
};
