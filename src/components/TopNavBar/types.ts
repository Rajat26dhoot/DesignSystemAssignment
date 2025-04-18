export interface NavItem {
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
  }
  
 export interface TopNavBarProps {
    items: NavItem[];
    selectedIndex?: number;
    onSelect?: (index: number) => void;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}