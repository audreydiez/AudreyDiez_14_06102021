import './Navigation.scss'
import Logo from 'assets/img/Logo_full.svg'
import Avatar from 'assets/img/user.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell as faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelope } from '@fortawesome/free-regular-svg-icons'

import React from 'react'
import SideBar from 'components/Navigation/SideBar/SideBar'

function Navigation() {
    const [menuDisplay, setMenuDisplay] = React.useState(false)

    const toggleMenu = () => {
        setMenuDisplay(!menuDisplay)
    }

    window.addEventListener('wheel', (e) => {
        if (menuDisplay) {
            setMenuDisplay(false)
        }
    })

    return (
        <>
            <nav role="main" className="main-nav">
                <ul className="main-nav-blocs">
                    <li className="main-nav-blocs-bloc">
                        <div className="hamburger" onClick={toggleMenu}>
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
                            <span className="notification-bubble">
                                <span className="notification-text">1</span>
                            </span>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </div>
                    </li>
                    <li className="main-nav-blocs-bloc">
                        <div className="notifications">
                            <span className="notification-bubble">
                                <span className="notification-text">3</span>
                            </span>
                            <FontAwesomeIcon icon={faBell} className="icon" />
                        </div>
                    </li>

                    <li className="main-nav-blocs-bloc">
                        <div className="user">John Cena</div>
                        <img src={Avatar} alt="" className="avatar" />
                    </li>
                </ul>
            </nav>
            <SideBar showMenu={menuDisplay} setMenuDisplay={toggleMenu} />
        </>
    )
}

export default Navigation
