import user from './jsone/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
