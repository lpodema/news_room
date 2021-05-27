import "./App.css";
import Header from "./components/header";
import Articles from "./containers/mainContainer";
import routes from "./components/routes";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Header />
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={`/${route.path}`}
                        exact={route.exact}
                        children={<Articles url={route.routing} />}
                    />
                ))}
            </Switch>
        </div>
    );
}

export default App;
