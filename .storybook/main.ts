import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // Include all MDX and story files inside src folder
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mjs)',
  ],
  addons: [
    '@storybook/addon-essentials',  // includes docs, controls, actions, viewport, backgrounds, toolbars
    '@storybook/addon-a11y',         // accessibility addon
    '@storybook/addon-postcss',      // for PostCSS support
    '@storybook/addon-onboarding',   // onboarding addon
    '@chromatic-com/storybook',      // Chromatic integration
    '@storybook/experimental-addon-test', // experimental addon (optional)
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    // Use MDX v2 for better compatibility and features
    autodocs: 'tag',
  },
  
};

export default config;
