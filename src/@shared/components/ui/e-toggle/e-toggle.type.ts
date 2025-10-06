
export interface EToggleProps{
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    checked?: boolean;
    onChange: (checked: boolean) => void;
}