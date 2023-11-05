import {
  FriendListList,
  FriendListItem,
  FriendListSpan,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendListList>
        {friends.map(friend => {
          return (
            <FriendListItem key={friend.id}>
              <FriendListSpan isOnline={friend.isOnline}></FriendListSpan>
              <img
                src={friend.avatar}
                alt={friend.name}
                width="40"
                height="40"
              />
              <p> {friend.name}</p>
            </FriendListItem>
          );
        })}
      </FriendListList>
    </>
  );
};
