import React from 'react';
import {
  StatsCard,
  StatsList,
  StatsItem,
  StatsSpan,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsCard className={title ? 'superSection' : 'baseSection'}>
      {title && <h2>{title}</h2>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsSpan>{label}</StatsSpan>
            <StatsSpan>{percentage}%</StatsSpan>
          </StatsItem>
        ))}
      </StatsList>
    </StatsCard>
  );
};
