import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { Communication } from "./pages/Communication";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { MyInfo } from "./pages/MyInfo";
import { RepeatTask } from "./pages/RepeatTask";
import { SingleTask } from "./pages/SingleTask";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/my-info" component={MyInfo} />
        <Route path="/communication" component={Communication} />
        <Route path="/repeat-task" component={RepeatTask} />
        <Route path="/single-task" component={SingleTask} />
      </Switch>
    </div>
  );
}

export default App;
