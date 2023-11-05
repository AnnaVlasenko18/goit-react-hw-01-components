import styled from 'styled-components';

export const TransTable = styled.table`
  width: 100%;
  max-width: 820px;
  border-radius: ${props => props.theme.radii.sm};
  background: ${p => p.theme.colors.brdPrifile};
  margin: 0 auto;
`;

export const TransList = styled.tr`
  color: #e6eaeb;
  height: 30px;
`;

export const TransItemTabl = styled.td`
  height: 25px;
  text-align: center;
`;

export function getBgLine(index) {
  if (index % 2 === 0) {
    return '#eae3e1';
  }
  return '#ead8d7';
}
