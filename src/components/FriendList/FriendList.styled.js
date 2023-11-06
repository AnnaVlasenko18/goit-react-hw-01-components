import styled from 'styled-components';

export const FriendListList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${p => p.theme.colors.brdPrifile};
  border-radius: ${props => props.theme.radii.sm};
  background: #eae3e1;
  padding: 8px;
  width: 100%;
  max-width: 800px;
  height: 70px;
  gap: 12px;
  margin: 0 auto;
`;
