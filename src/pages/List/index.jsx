import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { stringifySearch } from "../../utils/tools";

function List(props) {
  // console.log(props);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://api.cat-shop.penkuoer.com/api/v1/products")
      .then((res) => res.json())
      .then((res) => setList(res.products));
  }, []);
  return (
    <div>
      <h1>列表ye</h1>
      <ul>
        {list.map((item) => (
          <li key={item._id}>
            <Link
              to={{
                pathname: "/list/" + item._id,
                state: item,
                search: stringifySearch(item),
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
