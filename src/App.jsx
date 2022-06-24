import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from "./pages/Dev/Dev";
import Form from "./pages/Form/Form";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={ } /> */}
        <Route path="/dev" exact component={Dev} />
        <Route path="/form" exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
