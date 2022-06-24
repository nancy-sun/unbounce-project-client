import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from "./pages/Dev/Dev";
import DevIndividual from "./pages/DevIndividual/DevIndividual";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={ } /> */}
        <Route path="/dev/1" exact component={DevIndividual} />
        <Route path="/dev" exact component={Dev} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
