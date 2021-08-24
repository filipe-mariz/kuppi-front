import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListProducts from './pages/ListProducts';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
