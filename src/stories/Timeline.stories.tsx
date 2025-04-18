import React from 'react';
import { Timeline } from '../components/Timeline/Timeline';
import type { TimelineProps } from '../components/Timeline/types';
import { FaCheckCircle, FaRegClock } from 'react-icons/fa';

const events: TimelineProps['events'] = [
  {
    title: 'Project Kickoff',
    date: '2025-01-15',
    description: 'Initial meeting with stakeholders.',
    icon: <FaCheckCircle />,
    color: 'bg-green-500',
  },
  {
    title: 'Requirements Gathering',
    date: '2025-02-01',
    description: 'Collected all business requirements.',
    icon: <FaRegClock />,
    color: 'bg-blue-500',
  },
  {
    title: 'Development',
    date: '2025-03-10',
    description: 'Started the development phase.',
    icon: <FaRegClock />,
    color: 'bg-yellow-500',
  },
  {
    title: 'Release',
    date: '2025-04-18',
    description: 'Product released to production.',
    icon: <FaCheckCircle />,
    color: 'bg-green-600',
    link: { url: 'https://yourcompany.com/release-notes', text: 'Release Notes' },
  },
];

export default {
  title: 'Data Display/Timeline',
  component: Timeline,
  tags: ['autodocs'], // Enable autodocs
  args: { events },
  argTypes: {
    events: {
      description: 'Array of timeline events to display',
      control: false, // disable control because it's complex object
      table: {
        type: { summary: 'TimelineEvent[]' },
      },
    },
    orientation: {
      description: 'Orientation of the timeline',
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      table: {
        type: { summary: "'vertical' | 'horizontal'" },
        defaultValue: { summary: 'vertical' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A timeline component to visually represent a series of events in chronological order, supporting vertical and horizontal orientations.',
      },
    },
  },
};

export const Vertical = (args: TimelineProps) => (
  <div className="w-full">
    <Timeline {...args} orientation="vertical" />
  </div>
);

export const Horizontal = (args: TimelineProps) => (
  <div className="w-full">
    <Timeline {...args} orientation="horizontal" />
  </div>
);
