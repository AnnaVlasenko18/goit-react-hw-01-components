import {
  CardWrapper,
  CardUser,
  UsereUrl,
  Text,
  CardList,
  CardItem,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { views, followers, likes },
}) => {
  return (
    <CardWrapper>
      <UsereUrl src={avatar} alt={username} width="120" height="120" />
      <CardUser>
        <Text>{username}</Text>

        <Text>{tag}</Text>

        <Text>{location}</Text>
      </CardUser>

      <CardList>
        <CardItem>
          <span>Views</span>
          <span>{views}</span>
        </CardItem>
        <CardItem>
          <span>Followers</span>
          <span>{followers}</span>
        </CardItem>
        <CardItem>
          <span>likes</span>
          <span>{likes}</span>
        </CardItem>
      </CardList>
    </CardWrapper>
  );
};
