import {
  FriendListList,
  FriendListItem,
  FriendListSpan,
} from './FriendList.styled';
import { getBgColor } from './FriendList.styled.js';

export const FriendList = ({ friends }) => {
  return (
    <FriendListList>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendListSpan
            style={{ backgroundColor: getBgColor(friend.isOnline) }}
          ></FriendListSpan>
          <img src={friend.avatar} alt={friend.name} width="40" height="40" />
          <p> {friend.name}</p>
        </FriendListItem>
      ))}
    </FriendListList>
  );
};
