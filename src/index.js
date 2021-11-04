import React from 'react'
import ReactDOM from 'react-dom'

import App from './router/App'
import reportWebVitals from './reportWebVitals'

import 'assets/styles/reset.css'
import 'assets/styles/utils.scss'
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
