import './Header.scss'
import Logo from 'assets/img/Logo_full.svg'
import Avatar from 'assets/img/user.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBell as faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelope } from '@fortawesome/free-regular-svg-icons'

import React from 'react'
import { Link } from 'react-router-dom'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Blob from '../../assets/img/blob.svg'
import Workers from '../../assets/img/workers.svg'

function Header() {
    const [toggleMenu, setToggleMenu] = React.useState(true)

    return (
        <>
            <nav role="main" className="main-nav">
                <ul className="main-nav-blocs">
                    <li className="main-nav-blocs-bloc">
                        <div
                            className="hamburger"
                            onClick={() => {
                                setToggleMenu(!toggleMenu)
                            }}>
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
            <nav role="sub" className={`menu-nav ${toggleMenu ? 'active' : 'hidden'}`}>
                <div className="menu-nav-blocs">
                    <Link to={`/}`} className="menu-nav-blocs-link">
                        <FontAwesomeIcon icon={faAddressBook} size="lg" className="icon" />
                        <span className="text">All employees</span>
                    </Link>
                    <Link to={`/}`} className="menu-nav-blocs-link">
                        <FontAwesomeIcon icon={faUserPlus} size="lg" className="icon" />
                        <span>New employee</span>
                    </Link>
                </div>
                <div className="menu-nav-img">
                    <img className="blob" src={Blob} alt="" />
                    <img className="artwork" src={Workers} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Header
