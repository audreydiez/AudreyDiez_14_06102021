import React from 'react'
import { Link } from 'react-router-dom'

import './SideBar.scss'
import Avatar from 'assets/img/user.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBell as faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Blob from 'assets/img/blob.svg'
import Workers from 'assets/img/workers.svg'

function SideBar(props) {
    return (
        <div
            className={`overlay ${props.showMenu ? 'active' : 'hide'} `}
            onClick={props.setMenuDisplay}>
            <nav
                role="navigation"
                className={`menu-nav ${props.showMenu ? 'active' : 'hidden'} `}
                onClick={(e) => e.stopPropagation()}>
                <div className="menu-nav-blocs">
                    <div className="menu-nav-blocs-link profile">
                        <div className="bloc-icon">
                            <img width="50" height="50" src={Avatar} alt="" className="avatar" />
                        </div>
                        <span>John Cena</span>
                    </div>
                    <div className="separator" />
                    <Link to={`/`} className="menu-nav-blocs-link">
                        <div className="bloc-icon">
                            <span className="notification-bubble-menu">
                                <span className="notification-text">1</span>
                            </span>
                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
                        </div>
                        <span className="text">Mailbox</span>
                    </Link>
                    <Link to={`/`} className="menu-nav-blocs-link">
                        <div className="bloc-icon">
                            <span className="notification-bubble-menu">
                                <span className="notification-text">3</span>
                            </span>
                            <FontAwesomeIcon icon={faBell} size="lg" className="icon" />
                        </div>
                        <span className="text">Notifications</span>
                    </Link>
                    <Link to={`/`} className="menu-nav-blocs-link" onClick={props.setMenuDisplay}>
                        <div className="bloc-icon">
                            <FontAwesomeIcon icon={faAddressBook} size="lg" className="icon" />
                        </div>
                        <span className="text">All employees</span>
                    </Link>
                    <Link
                        to={`/new-employee`}
                        className="menu-nav-blocs-link"
                        onClick={props.setMenuDisplay}>
                        <div className="bloc-icon">
                            <FontAwesomeIcon icon={faUserPlus} size="lg" className="icon" />
                        </div>
                        <span>New employee</span>
                    </Link>
                </div>
                <div className="menu-nav-img">
                    <img width="700" height="700" className="blob" src={Blob} alt="" />
                    <img className="artwork" src={Workers} alt="" />
                </div>
            </nav>
        </div>
    )
}

export default SideBar
