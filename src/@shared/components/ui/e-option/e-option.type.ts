export interface EOptionProps {
  value: string;
  label: string;
  isSelected?: boolean;
  onSelect?: (val: string) => void;
}