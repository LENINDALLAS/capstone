import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupInnovator from './components/signup/SignupInnovator.js';
import SignupInvestor from './components/signup/SignupInvestor';
import SigninInnovator from './components/signin/SigninInnovator';
import SigninInvestor from './components/signin/SigninInvester';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signupInnovator' component={SignupInnovator} />
        <Route path='/signupInvestor' component={SignupInvestor} />
        <Route path='/signinInnovator' component={SigninInnovator} />
        <Route path='/signinInvestor' component={SigninInvestor} />

      </Switch>
    </Router>
  );
}

export default App;
