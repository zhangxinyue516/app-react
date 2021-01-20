import { useContext } from "react";
//Link生成a标签
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List/index";
import Detail from "./pages/List/detail";
import User from "./pages/User";
import PageNotFound from "./pages/404";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">首页|</Link>
        <Link to="/list">列表|</Link>
        <Link to="/user">用户</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/list" exact component={List}></Route>
        <Route path="/list/:id" component={Detail}></Route>

        <Route path="/user" render={() => <User />} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
