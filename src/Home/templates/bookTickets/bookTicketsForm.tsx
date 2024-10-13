import { useState } from 'react';
import RadioButton from '../../ui/radioButton/radioButton'
import { RadioTitle } from '../../ui/radioTitle/radioTitle'
import './bookTicketsForm.css'
import SelectBox from '../../ui/dropdownSelector/dropdownSelector';


const options = [
    { name: 'Cream', value: '1', checked: true },
    { name: 'Cheese', value: '2' },
    { name: 'Milk', value: '3' },
    { name: 'Honey', value: '4' },
    { name: 'Toast', value: '5' },
];

export default function BookTicketsForm(){

    const [selectedValueTitle, setSelectedValueTitle] = useState<string>('buy');
    const [selectedValueButton, setSelectedValueButton] = useState<string>('buy');
    
    const handleChangeTitle = (value: string) => {
        setSelectedValueTitle(value);
    };
    const handleChangeButton = (value: string) => {
        setSelectedValueButton(value);
    };

    return(
        <form action="" className='book-tickets-form'>
            <div className='book-tickets-form-title'>
                <RadioTitle
                    label="Buy Tickets"
                    value="buy"
                    checked={selectedValueTitle === 'buy'}
                    onChange={handleChangeTitle}
                />
                <RadioTitle
                    label="Check your flight status"
                    value="status"
                    checked={selectedValueTitle === 'status'}
                    onChange={handleChangeTitle}
                />
            </div>
            <div className='book-tickets-form-types'>
                <RadioButton 
                    label="One way"
                    value="one"
                    checked={selectedValueButton === 'one'}
                    onChange={handleChangeButton} 
                />
                <RadioButton
                    label="Round trip"
                    value="round"
                    checked={selectedValueButton === 'round'}
                    onChange={handleChangeButton}
                />
                <RadioButton
                    label="Multi-city"
                    value="multi"
                    checked={selectedValueButton === 'multi'}
                    onChange={handleChangeButton}
                />
            </div>

            <SelectBox name='from' options={options}/>
        </form>
    )
}