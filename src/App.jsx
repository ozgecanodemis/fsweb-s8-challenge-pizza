import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Order from './components/Order';
import Success from './components/Success';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Order} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}
