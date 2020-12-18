import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //Remember BEM!!!
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <h1>This is About page</h1>
          </Route>
          <Route path="/store">
            <h1>This is store page</h1>
          </Route>
          <Route path="/gmail">
            <h1>This is gmail page</h1>
          </Route>
          <Route path="/images">
            <h1>this is images page</h1>
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
