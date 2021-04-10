import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/client/list" exact component={List} />
        <Route path="/client/create" exact component={List} />
        <Route path="/">
          <Redirect to="/client/list" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
