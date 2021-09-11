import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupInnovator from './components/signup/SignupInnovator.js';
import SignupInvestor from './components/signup/SignupInvestor';
import SigninInnovator from './components/signin/SigninInnovator';
import SigninInvestor from './components/signin/SigninInvester';
import Home from './components/Home/Home';
import InnovatorForm from './components/innovatorFormScreen/innovatorFormScreen';
import { SnackbarProvider } from 'notistack';
import InvestorProfile from './components/investorProfile/InvestorProfile.js';
import InnovatorProfile from './components/innovatorProfile/InnovatorProfile';


function App() {
  return (
    <Router>
      <Switch>
        <SnackbarProvider maxSnack={3}>
          <Route path='/' exact component={Home} />
          <Route path='/signupInnovator' component={SignupInnovator} />
          <Route path='/signupInvestor' component={SignupInvestor} />
          <Route path='/signinInnovator' component={SigninInnovator} />
          <Route path='/signinInvestor' component={SigninInvestor} />
          <Route path='/innovatorForm' component={InnovatorForm} />
          <Route path='/investorProfile' component={InvestorProfile} />
          <Route path='/innovatorProfile' component={InnovatorProfile} />
        </ SnackbarProvider>

      </Switch>
    </Router>
  );
}

export default App;
