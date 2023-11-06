import styled from 'styled-components';

export const FriendListItemItem = styled.li`
  border: 2px solid ${p => p.theme.colors.brdPrifile};
  border-radius: ${props => props.theme.radii.sm};
  max-width: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const FriendListSpan = styled.span`
  border-radius: 50%;
  background: ${props => (props.isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  display: inline-block;
`;
