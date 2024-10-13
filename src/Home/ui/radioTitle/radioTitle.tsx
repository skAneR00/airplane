import './radioTitle.css';

interface RadioTitleProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
}

export const RadioTitle = ({ label, value, checked, onChange }: RadioTitleProps) => {
    return (
        <label className={`radio-title ${checked ? 'active' : ''}`}>
            <input
                type="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <span>{label}</span>
        </label >
    );
};