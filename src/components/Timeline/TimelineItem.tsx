import React from 'react';
import { TimelineEvent } from './types';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
  orientation: 'vertical' | 'horizontal';
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast, orientation }) => (
  <div
    className={`flex ${
      orientation === 'vertical' ? 'flex-row' : 'flex-col items-center'
    } relative group focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-opacity-50 rounded-lg transition-shadow duration-300 shadow-sm hover:shadow-md bg-gradient-to-r from-white to-gray-50`}
    aria-label={event.title}
    role="listitem"
  >
    {/* Timeline marker */}
    <div className="flex flex-col items-center mr-6">
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-md ${
          event.color || 'bg-blue-600'
        } text-white text-xl transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
        aria-hidden="true"
      >
        {event.icon}
      </span>
      {!isLast && (
        <span
          className={`block ${
            orientation === 'vertical' ? 'h-20 w-1' : 'w-20 h-1'
          } bg-gradient-to-b from-transparent via-gray-300 to-transparent rounded-full`}
          aria-hidden="true"
        />
      )}
    </div>

    {/* Content */}
    <div
      className="flex-1 p-6 bg-white rounded-lg border-2 border-gray-300 shadow-sm 
                 hover:shadow-lg hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 
                 focus:outline-none transition-shadow transition-colors duration-300"
    >
      <h3 className="font-bold text-xl text-gray-900 mb-1">{event.title}</h3>
      <time className="block text-sm text-blue-600 font-semibold mb-3">{event.date}</time>
      {event.description && (
        <p className="text-gray-700 text-base leading-relaxed mb-4">{event.description}</p>
      )}
      {event.link && (
        <a
          href={event.link.url}
          className="inline-block text-blue-600 font-semibold underline hover:text-blue-800 focus:text-blue-800 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.link.text}
          <span
            aria-hidden="true"
            className="ml-1 inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
          >
            →
          </span>
        </a>
      )}
    </div>
  </div>
);
