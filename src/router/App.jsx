
import './App.css';

import Employees from "containers/Employees/Employees";
import Home from "containers/Home/Home";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
  }
]

function App() {
  return (
      <Router>
        <div className="router-container">

          <Switch>
            {routes.map((route, i) =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    key={i}
                    component={route.component}
                />
            )}
          </Switch>

        </div>
      </Router>
  );
}

export default App;
