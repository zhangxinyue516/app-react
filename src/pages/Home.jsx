import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../router";

function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>首页</h1>
      <ul>
        {routes.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {routes.map((item) => (
        <Route
          key={item.path + Math.random()}
          path={item.path}
          render={() => <item.component />}
        />
      ))}
    </div>
  );
}

export default Home;
