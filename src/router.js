import Products from "./pages/admin/products";
import Users from "./pages/admin/users";
import Orders from "./pages/admin/orders";
import Articles from "./pages/admin/articles";

const routes = [
  {
    path: "/admin/products",
    component: Products,
    name: "商品管理",
  },
  {
    path: "/admin/users",
    component: Users,
    name: "用户管理",
  },
  {
    path: "/admin/orders",
    component: Orders,
    name: "订单管理",
  },
  {
    path: "/admin/articles",
    component: Articles,
    name: "文章管理",
  },
];

export default routes;
