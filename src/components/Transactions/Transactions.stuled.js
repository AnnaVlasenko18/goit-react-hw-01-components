import styled from 'styled-components';

export const TransTable = styled.table`
  width: 100%;
`;

export const TransRow = styled.tr`
  background-color: ${props => (props.even ? '#eae3e1' : '#ead8d7')};
`;

export const TransCard = styled.thead`
  border-radius: ${props => props.theme.radii.sm};
  background: ${p => p.theme.colors.brdPrifile};
`;

export const TransList = styled.tr`
  color: #e6eaeb;
`;

export const TransItem = styled.th`
  width: 330px;
  height: 25px;
  border: 1px solid ${p => p.theme.colors.brdPrifile};
`;
