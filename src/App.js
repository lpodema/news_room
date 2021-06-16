import "./App.css";
import Header from "./components/header";
import Articles from "./containers/mainContainer";
import routes from "./components/routes";
import { Switch, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

function App() {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid container xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
