import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <ul className="friend-list">
      <FriendListItem />
    </ul>
  );
};

// comment
