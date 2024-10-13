import React, {useState} from 'react';
import './dropdownSelector.css';

interface Option {
    name: string;
    value: string;
    checked?: boolean;
}

interface SelectBoxProps {
    name: string;
    options: Option[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ name, options }) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        options.find(option => option.checked)?.value
    );
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <div className="select-box">
            <div
                className="select-box__current"
                tabIndex={0}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
            >
                <div className="select-box__value">
                    {options.map((option, index) => (
                        <React.Fragment key={index}>
                            <input
                                className="select-box__input"
                                type="radio"
                                id={`option-${index}`}
                                value={option.value}
                                name={name}
                                checked={selectedOption === option.value}
                                onChange={() => handleOptionClick(option.value)}
                            />
                            <p className="select-box__input-text">
                                {selectedOption === option.value && option.name}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
                <img
                    className="select-box__icon"
                    src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                    alt="Arrow Icon"
                    aria-hidden="true"
                />
            </div>
            <ul className={`select-box__list ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <li key={index}>
                        <label
                            className="select-box__option"
                            htmlFor={`option-${index}`}
                            aria-hidden="true"
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectBox;
