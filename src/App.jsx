import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from "./pages/Dev/Dev";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={ } /> */}
        <Route path="/dev" exact component={Dev} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
