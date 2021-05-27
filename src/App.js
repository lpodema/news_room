import "./App.css";
import { Component } from "react";
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
                <Route
                    path='/search/:term'
                    render={(props) => (
                        <Articles term={props.match.params.term} />
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
