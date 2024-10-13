import './radioButton.css'

interface RadioButtonProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
}

export default function RadioButton({ label, value, checked, onChange }: RadioButtonProps) {
    return <label>
        <input
            type="radio"
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
        />
        {label}
    </label>
}