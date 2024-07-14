import { Route, Switch } from "react-router-dom";
import "./App.css";
import { TestA } from "./pages/TestA";
import { TestB } from "./pages/TestB";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={TestA} />
        <Route path="/b" exact component={TestB} />
      </Switch>
    </div>
  );
}

export default App;
