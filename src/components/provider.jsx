import React, { createContext, useState } from "react";
export const context = createContext();
const { Provider } = context; //Provider数据提供者

function MyProvider({ children }) {
  const [count, setCount] = useState(1);
  return (
    <Provider value={{ name: "demo-app", count, setCount }}>
      {children}
    </Provider>
  );
}
export default MyProvider;
