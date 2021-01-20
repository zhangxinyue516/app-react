import React, { Component } from "react";
import { context } from "../components/provider";

export default class B extends Component {
  render() {
    console.group("-------------");
    console.log(this.context);
    console.groupEnd();
    return (
      <div>
        <h2>{this.context.count}...</h2>
        <h2>class组件</h2>
      </div>
    );
  }
}
B.contextType = context;
