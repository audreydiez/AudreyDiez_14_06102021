import './HeaderTitle.scss'
import React from 'react'

function HeaderTitle(props) {
    return (
        <header className="header">
            <div className="header-title">{props.title}</div>
            <div className="header-separator" />
        </header>
    )
}

export default HeaderTitle
