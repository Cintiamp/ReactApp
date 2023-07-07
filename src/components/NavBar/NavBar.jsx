import './NavBar.css'

function NavBar(props) {

    return (
        <nav className='NavBar'>
            <h1>Paco Rabanne</h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Fragancias femeninas</a></li>
                <li><a href="">Fragancias masculinas</a></li>
                <li><a href="">Fragancias unisex</a></li>  
                <li><a href="">{props.CartWidget}</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
