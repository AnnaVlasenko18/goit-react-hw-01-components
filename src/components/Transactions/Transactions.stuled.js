import styled from 'styled-components';

export const TransCard = styled.thead`
  border: 1px solid ${p => p.theme.colors.brdPrifile};
`;

export const TransList = styled.tr`
  border: 1px solid ${p => p.theme.colors.brdPrifile};
`;

export const TransItem = styled.th`
  width: 210px;
  height: 25px;
  border: 1px solid ${p => p.theme.colors.brdPrifile};
`;
