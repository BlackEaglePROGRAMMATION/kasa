import { Link } from 'react-router-dom'
import logo from './../../assets/kasa-logo.png'
import './index.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="kasa-logo" />
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </div>
        </header>
    )
}

export default Header