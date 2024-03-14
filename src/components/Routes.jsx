import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Reservas from './reservas';


const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/reservas" component={Reservas} />
      </Switch>
    </Router>
  );
};

export default Routes;
