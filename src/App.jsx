import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from "./pages/Dev/Dev";
import DevIndividual from "./pages/DevIndividual/DevIndividual";

import HelpPage from "./component/HelpPage/HelpPage";
import HelpDegree from "./component/HelpDegree/HelpDegree";
import HelpDetail from "./component/HelpDetail/HelpDetail";
import HelpInfo from "./component/HelpInfo/HelpInfo";
import "./App.scss";
import HelpFinalPage from "./component/HelpFinalPage/HelpFinalPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={ } /> */}
        <Route path="/dev/1" exact component={DevIndividual} />
        <Route path="/dev" exact component={Dev} />

        <Route path="/help" exact component={HelpPage} />
        <Route path="/helpdegree" exact component={HelpDegree} />
        <Route path="/helpdetail" exact component={HelpDetail} />
        <Route path="/helpinfo" exact component={HelpInfo} />
        <Route path="/helpfinal" exact component={HelpFinalPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
