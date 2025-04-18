import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProgressBar} from '../components/ProgressBar/ProgressBar';
import { ProgressBarProps } from '../components/ProgressBar/types';

export default {
  title: 'Data Display/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A progress bar component supporting determinate and indeterminate states with accessibility, theming, and responsive design.',
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
  size: 'medium',
  color: 'primary',
  showLabel: true,
  label: 'Loading progress',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};


export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: 'success',
  label: 'Task Completed',
};
