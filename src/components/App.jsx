import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics';
import { Transactions } from './Transactions/Transactions.js';
import user from './jsone/user.json';
import data from './jsone/data.json';
import transactions from './jsone/transactions.json';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #e6eaeb;
  padding: 20px;
  gap: 20px;
  width: 700px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <>
      <Wrapper>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <Transactions items={transactions} />
      </Wrapper>
    </>
  );
};
