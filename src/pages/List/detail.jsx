import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function Detail() {
  const params = useParams();
  console.log(params);
  const { state } = useLocation();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://api.cat-shop.penkuoer.com/api/v1/products/" + params.id)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      {params.id}
      <hr />
      <h5>{data.name}</h5>
      {/* react中展示富文本内容 */}
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  );
}

export default Detail;
