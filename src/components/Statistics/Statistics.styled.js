import styled from 'styled-components';

export const StatsCard = styled.section`
  width: 310px;
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${p => p.theme.colors.brdPrifile};
  margin: 0 auto;
  background: #eae3e1;
`;

export const StatsList = styled.ul`
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: #ead8d7;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  border: 1.5px solid ${p => p.theme.colors.brdPrifile};
`;

export const StatsSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 500;
`;
