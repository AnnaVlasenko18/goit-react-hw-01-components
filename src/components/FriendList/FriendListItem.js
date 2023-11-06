import { FriendListItemItem, FriendListSpan } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendListItemItem key={id}>
      <FriendListSpan isOnline={isOnline}></FriendListSpan>
      <img src={avatar} alt={name} width="40" height="40" />
      <p> {name}</p>
    </FriendListItemItem>
  );
};
