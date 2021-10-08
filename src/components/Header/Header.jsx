import './Header.scss'
import Logo from 'assets/img/Logo_full.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell as faBell } from '@fortawesome/free-regular-svg-icons'

function Header() {
    return (
        <nav className="main-nav">
            <ul className="main-nav-blocs">
                <li className="main-nav-blocs-bloc">
                    <div className="hamburger">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </li>
                <li className="main-nav-blocs-bloc">
                    <img className="logo" src={Logo} alt="HRnet Home" />
                </li>
                <li className="main-nav-blocs-bloc">
                    <div className="notifications">
                        <FontAwesomeIcon icon={faBell} className="icon" />
                    </div>
                </li>
                <li className="main-nav-blocs-bloc">
                    <div className="avatar">avatar</div>
                </li>
            </ul>
        </nav>
    )
}

export default Header
