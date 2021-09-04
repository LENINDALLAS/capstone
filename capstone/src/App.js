import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupInnovator from './components/SignupInnovator.js';

function App() {
  return (
    <Router>
      <Switch>

        <Route path='/signupInnovator' component={SignupInnovator} />
      </Switch>
    </Router>
  );
}

export default App;
