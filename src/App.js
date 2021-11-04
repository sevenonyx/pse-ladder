import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "./routes";
import Delta from "./screens/Delta";
import Home from "./screens/Home";

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  max-width: 930px;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          <Content>
            <Home />
          </Content>
        </Route>
        <Route path={routes.delta}>
          <Content>
            <Delta />
          </Content>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
