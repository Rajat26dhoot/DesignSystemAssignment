// src/components/Timeline/Timeline.tsx

import React from 'react';
import { TimelineProps } from './types';
import { TimelineItem } from './TimelineItem';

export const Timeline: React.FC<TimelineProps> = ({
  events,
  orientation = 'vertical',
  className = '',
}) => {
  if (!events || events.length === 0) return null;

  return (
    <div
      className={`timeline-container ${
        orientation === 'vertical' ? 'flex flex-col' : 'flex flex-row'
      } ${className}`}
      role="list"
      aria-label="Timeline"
    >
      {events.map((event, idx) => (
        <TimelineItem
          key={idx}
          event={event}
          isLast={idx === events.length - 1}
          orientation={orientation}
        />
      ))}
    </div>
  );
};
