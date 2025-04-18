// src/theme/color.ts

export interface Colors {
    primary: string;
    secondary: string;
    tertiary: string;
    neutral: {
      white: string;
      lightGrey: string;
      mediumGrey: string;
      darkGrey: string;
      border: string;
      backgroundLight: string;
      backgroundDark: string;
    };
    semantic: {
      success: string;
      info: string;
      warning: string;
      error: string;
    };
    background: {
      light: string;
      dark: string;
      surfaceLight: string;
      surfaceDark: string;
    };
  }
  
  export const colors: Colors = {
    primary: '#0052cc',     // Strong blue, professional and vibrant
    secondary: '#6b778c',   // Muted slate gray for secondary elements
    tertiary: '#00b8d9',    // Bright teal for accents or highlights
  
    neutral: {
      white: '#ffffff',
      lightGrey: '#f4f5f7',      // Light background gray
      mediumGrey: '#7a869a',     // Medium contrast text or borders
      darkGrey: '#172b4d',       // Dark text color for readability
      border: '#dfe1e6',         // Subtle border color
      backgroundLight: '#ffffff',// Light mode background
      backgroundDark: '#1d2a3a', // Dark mode background base
    },
  
    semantic: {
      success: '#36b37e',  // Calm green for success states
      info: '#00b8d9',     // Teal for informational messages
      warning: '#ffab00',  // Amber for warnings
      error: '#ff5630',    // Vivid red for errors
    },
  
    background: {
      light: '#ffffff',
      dark: '#0b1a2d',         // Darker background for dark mode
      surfaceLight: '#f4f5f7', // Cards, surfaces in light mode
      surfaceDark: '#223b5a',  // Cards, surfaces in dark mode
    },
  };
  