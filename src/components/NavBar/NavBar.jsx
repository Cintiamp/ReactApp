import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar(props) {
    

    return (
        <nav className='NavBar'>
            <Link to="/home">
            <h1>Paco Rabanne</h1>
            </Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/category/femme">Fragancias femeninas</Link></li>
                <li><Link to="/category/men">Fragancias masculinas</Link></li>
                <li><Link to="/category/unisex">Fragancias unisex</Link></li>  
                <li><Link to="/cart">{props.CartWidget}</Link></li>
            </ul>
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </nav>
    )
}

export default NavBar
