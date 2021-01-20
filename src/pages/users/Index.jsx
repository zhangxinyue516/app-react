import React from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import qs from "qs";

function Index(props) {
  console.log(props);
  const location = useLocation();
  console.log(location);
  console.log(getParamsFromSearch(location.search, "age"));

  console.log("---------------------------");
  console.log(
    qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
  );
  console.log("---------------------------");

  const history = useHistory();
  console.log(history);
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>个人信息</h1>
    </div>
  );
}

function getParamsFromSearch(search, name) {
  const sp = new URLSearchParams(search);
}

export default Index;
