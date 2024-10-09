import NavLink from '../../ui/nav-link/NavLink'
import './navbar.css'


export default function NavBar() {


    return (
        <section className='nav-bar'>
            <div className='nav-bar-logo'>
                <span>U</span>travel
            </div>
            <div className="nav-bar-links">
                <NavLink text='Home' link='home' />
                <NavLink text='Help' link='help' />
                <NavLink text='Log in' link='login' />
                <NavLink text='Sign up' link='signup' />
            </div>
        </section>
    )
}