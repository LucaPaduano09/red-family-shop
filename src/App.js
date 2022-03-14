import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Maglie from "./components/Maglie";
import MaglieDetails from "./components/MaglieDetails";
import Carrello from "./components/Carrello";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/maglie"}>
            <Maglie />
          </Route>
          <Route path={"/maglie-details"}>
            <MaglieDetails />
          </Route>
          <Route path={"/carrello"}>
            <Carrello />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
