import { Switch, Route } from 'wouter';
import Landing from './pages/Landing';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route>
        <Landing />
      </Route>
    </Switch>
  );
}
