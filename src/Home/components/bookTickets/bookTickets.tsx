import BookTicketsForm from '../../templates/bookTickets/bookTicketsForm'
import './bookTickets.css'


export default function BookTickets(){


    return(
        <section className='book-tickets'>
            <p className='book-tickets-title'>Book now!</p>
            <BookTicketsForm />
        </section>
    )
}