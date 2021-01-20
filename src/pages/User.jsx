import React from "react";
import { Route, Link } from "react-router-dom";
import Index from "./users/Index";
import Order from "./users/Order";
import Scores from "./users/Scores";

function User(props) {
  console.log(props);
  return (
    <div>
      <h1>我的</h1>
      <hr />
      <Link
        to={{
          pathname: "/user/info/kk",
          search: "id=1&age=18&name=tom",
          state: {
            title: "我的世界",
            subtitle: "迷你世界",
            s: "植物大战僵尸",
          },
        }}
      >
        【个人信息】
      </Link>
      {/* <Link to="/user/info">【个人信息】</Link> */}
      <Link to="/user/order">【我的订单】</Link>
      <Link to="/user/scores">【我的积分】</Link>
      <hr />
      <Route path="/user/info/:name" render={() => <Index />} />
      <Route path="/user/order" component={Order} />
      <Route path="/user/scores" component={Scores} />
    </div>
  );
}

export default User;
