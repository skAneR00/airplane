import './navLink.css';

type Message = {
    text: string,
    link: string
};


export default function NavLink({text, link}: Message){

    return(
        <a href={`#` + link}>
            {text}
        </a>
    )
}