import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupInnovator from './components/SignupInnovator.js';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Home />
        <Route path='/signupInnovator' component={SignupInnovator} />
      </Switch>
    </Router>
  );
}

export default App;
