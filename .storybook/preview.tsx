import type { Preview } from '@storybook/react';
import '../src/index.css';  // Import your global styles
import React from 'react';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter for routing context

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,  // Matches background and color properties for controls
        date: /Date$/i,  // Matches Date properties for controls
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>  
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
