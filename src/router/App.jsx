import './App.scss'

import Employees from 'containers/Employees/Employees'
import Home from 'containers/Home/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import NewEmployee from '../containers/NewEmployee/NewEmployee'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/employees',
        exact: true,
        component: Employees
    },
    {
        path: '/new-employee',
        exact: true,
        component: NewEmployee
    }
]

function App() {
    return (
        <Router>
            <div className="router-container">
                <Navigation />

                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            exact={route.exact}
                            path={route.path}
                            key={i}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </div>
        </Router>
    )
}

export default App
