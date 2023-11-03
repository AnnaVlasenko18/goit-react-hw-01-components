import {
  CardWrapeer,
  CardUser,
  UsereUrl,
  Text,
  CardList,
  CardItem,
} from './Profile.styled';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <CardWrapeer>
      <UsereUrl crs={avatar} alt={username} width="120" height="120" />
      <CardUser>
        <Text>{username}</Text>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </CardUser>

      <CardList>
        <CardItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </CardItem>
        <CardItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </CardItem>
        <CardItem>
          <span>likes</span>
          <span>{stats.likes}</span>
        </CardItem>
      </CardList>
    </CardWrapeer>
  );
};
