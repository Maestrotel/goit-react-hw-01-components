import { Profile } from '../components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
};
