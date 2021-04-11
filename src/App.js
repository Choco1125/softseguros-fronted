import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './pages/List';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/client/list" exact component={List} />
        <Route path="/client/create" exact component={Create} />
        <Route path="/client/edit/:document" exact component={Edit} />
        <Route path="/">
          <Redirect to="/client/list" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
