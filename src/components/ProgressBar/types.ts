import React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  label?: string;
  showLabel?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  className?: string;
}
