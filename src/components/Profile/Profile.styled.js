import styled from 'styled-components';

export const CardWrapeer = styled.div`
  border: 1px solid ${p => p.theme.colors.brdPrifile};
  border-radius: ${props => props.theme.radii.sm};
  padding: ${p => p.theme.spacing(2)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 240px;
  background: #eae3e1;
`;

export const CardUser = styled.div`
  width: 140px;
`;

export const UsereUrl = styled.img`
  border-radius: ${p => p.theme.radii.md};
`;

export const Text = styled.p`
  margin-top: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0;
  margin: 0;
  background: #ead8d7;
`;

export const CardItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
