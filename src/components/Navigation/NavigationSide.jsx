import Avatar from '../../assets/img/user.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Blob from '../../assets/img/blob.svg'
import Workers from '../../assets/img/workers.svg'
import React from 'react'

import './NavigationSide.scss'

function NavigationSide(props) {
    return (
        <nav role="sub" className={`menu-nav`} style={{ display: 'flex' }}>
            <div className="menu-nav-blocs">
                <div className="menu-nav-blocs-link profile">
                    <div className="bloc-icon">
                        <img src={Avatar} alt="" className="avatar" />
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
                <Link to={`/employees`} className="menu-nav-blocs-link">
                    <div className="bloc-icon">
                        <FontAwesomeIcon icon={faAddressBook} size="lg" className="icon" />
                    </div>
                    <span className="text">All employees</span>
                </Link>
                <Link to={`/new-employee`} className="menu-nav-blocs-link">
                    <div className="bloc-icon">
                        <FontAwesomeIcon icon={faUserPlus} size="lg" className="icon" />
                    </div>
                    <span>New employee</span>
                </Link>
            </div>
            <div className="menu-nav-img">
                <img className="blob" src={Blob} alt="" />
                <img className="artwork" src={Workers} alt="" />
            </div>
        </nav>
    )
}

export default NavigationSide
