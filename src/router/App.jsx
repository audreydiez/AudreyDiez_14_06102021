import './App.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Employees from 'containers/Employees/Employees'
import NewEmployee from 'containers/NewEmployee/NewEmployee'
import Navigation from 'components/Navigation/Navigation'

const routes = [
    {
        path: '/',
        exact: true,
        component: NewEmployee
    },
    {
        path: '/employee',
        exact: true,
        component: Employees
    }
]

function App() {
    return (
        <Router>
            <Navigation />
            <main className="main">
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
            </main>
        </Router>
    )
}

export default App
