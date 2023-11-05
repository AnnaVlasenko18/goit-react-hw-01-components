import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics';
import user from './jsone/user.json';
import data from './jsone/data.json';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: #e6eaeb;
  padding: 20px;
  gap: 20px;
`;

export const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </Wrapper>
  );
};
