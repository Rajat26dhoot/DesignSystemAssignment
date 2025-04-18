// src/components/TopNavBar/TopNavBar.stories.tsx

import React, { useState } from 'react';
import { TopNavBar } from '../components/TopNavBar/TopNavBar';
import type { NavItem } from '../components/TopNavBar/types';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import type { Meta, Story } from '@storybook/react';

const navItems: NavItem[] = [
  { label: 'Home', icon: <FaHome /> },
  { label: 'Profile', icon: <FaUser /> },
  { label: 'Settings', icon: <FaCog />, disabled: true },
];

export default {
  title: 'Navigation/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    items: { control: false }, // complex React nodes, disable control
    selectedIndex: {
      control: { type: 'number', min: 0, max: navItems.length - 1 },
      description: 'Index of the currently selected navigation item',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    onSelect: { action: 'onSelect' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the navigation bar',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'TopNavBar component for horizontal navigation with icons, labels, disabled states, and size variants.',
      },
    },
  },
} as Meta;

const Template: Story<{
  selectedIndex: number;
  size: 'sm' | 'md' | 'lg';
}> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(args.selectedIndex);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <TopNavBar
        items={navItems}
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
          args.onSelect?.(index);
        }}
        size={args.size}
      />
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  selectedIndex: 0,
  size: 'md',
};
