import React, { useEffect, useState } from 'react';
import { colors } from '../../theme/color';
import { ProgressBarProps } from './types';



const sizeClasses = {
  small: 'h-3',
  medium: 'h-6',
  large: 'h-9',
};

const labelSizeClasses = {
  small: 'text-[10px] pl-1',
  medium: 'text-xs pl-2',
  large: 'text-sm pl-3',
};

const colorMap = {
  primary: colors.primary,
  secondary: colors.secondary,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  size = 'medium',
  color = 'primary',
  label,
  showLabel = false,
  indeterminate = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  const [progress, setProgress] = useState(0);
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = (clampedValue / max) * 100;

  useEffect(() => {
    if (progress < percentage) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = Math.min(prev + 1, percentage);
          if (nextProgress === percentage) {
            clearInterval(interval);
          }
          return nextProgress;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [percentage, progress]);

  const createParticle = () => {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    const size = Math.random() * 5 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 2 + 3}s`;

    return particle;
  };

  useEffect(() => {
    const progressBar = document.querySelector('.progress') as HTMLElement;
    if (progressBar) {
      const interval = setInterval(() => {
        const particle = createParticle();
        progressBar.appendChild(particle);
        setTimeout(() => particle.remove(), 3000);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress]);

  // Determine the color to be used for the progress bar.
  const progressBarColor = colorMap[color] || colorMap.primary;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : clampedValue}
      aria-label={label}
      aria-busy={indeterminate}
      tabIndex={0}
      className={`relative w-full bg-black rounded-2xl border-4 ${sizeClasses[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}
      style={{
        borderColor: progressBarColor, // Apply dynamic border color
      }}
      {...rest}
    >
      {indeterminate ? (
        <div
          className="absolute top-0 left-0 flex justify-between w-full h-full animate-pulse"
          style={{
            backgroundColor: progressBarColor,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)',
          }}
        >
          {/* Animated small blocks for indeterminate state */}
          <div className="w-1/5 bg-white rounded-full h-full animate-pulse" />
          <div className="w-1/5 bg-white rounded-full h-full animate-pulse" />
          <div className="w-1/5 bg-white rounded-full h-full animate-pulse" />
          <div className="w-1/5 bg-white rounded-full h-full animate-pulse" />
          <div className="w-1/5 bg-white rounded-full h-full animate-pulse" />
        </div>
      ) : (
        <div
          className="progress h-full rounded-2xl transition-all duration-700 ease-in-out"
          style={{
            width: `${progress}%`,
            background: progressBarColor, // Apply dynamic background color
          }}
        >
          {showLabel && size !== 'small' && (
            <span
              className={`absolute inset-0 flex justify-center items-center text-white font-semibold select-none ${labelSizeClasses[size]}`}
            >
              {Math.round(progress)}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};
