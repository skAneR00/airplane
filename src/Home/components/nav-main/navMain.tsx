import NavBar from '../../templates/navbar/navbar';
import './navMain.css';

export default function NavMain() {

    return (
        <section className="nav-main">
            <NavBar />
            <div className='nav-main-text'>
                <p>we are here for you.</p>
                <p>Worldwide</p>
            </div>
        </section>
    )
}