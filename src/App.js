import "./App.css";
import NavBar from "./Components/NavBar";
import Items from "./Components/Items";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailedView from "./Components/DetailedView";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/items" exact component={Items} />
          <Route path="/items/:id" component={DetailedView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
