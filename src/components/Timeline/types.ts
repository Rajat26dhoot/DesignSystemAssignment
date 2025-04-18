

export interface TimelineEvent {
    title: string;
    date: string;
    description?: string;
    icon?: React.ReactNode;
    color?: string; 
    link?: { url: string; text: string };
  }
  
  export interface TimelineProps {
    events: TimelineEvent[];
    orientation?: 'vertical' | 'horizontal';
    className?: string;
  }
  