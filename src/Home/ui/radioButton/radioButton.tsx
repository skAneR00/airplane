import './radioButton.css'

type Text = {
    text: string,
    id: string
};

export default function RadioButton({text, id}: Text){
    return <label><input type="radio" name={text} id={id} />{text}</label>
}