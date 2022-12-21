import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const AllPeople = lazy(() => import("./pages/AllPeople"));
const AddPeople = lazy(() => import("./pages/AddPeople"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const routes = [
  {
    name: "Home",
    path: "/home",
    Component: Home,
    headerNav: true,
  },
  {
    name: "All People",
    path: "/allpeople",
    Component: AllPeople,
    headerNav: true,
  },
  {
    name: "Add People",
    path: "/addpeople",
    Component: AddPeople,
    headerNav: true,
  },
  {
    name: "Edit People",
    path: "/editpeople/:id",
    Component: AddPeople,
    headerNav: false,
  },
  {
    name: "Products",
    path: "/productlisting",
    Component: Products,
    headerNav: true,
  },
  {
    name: "ProductDetail",
    path: "/producDetail/:id",
    Component: ProductDetail,
    headerNav: false,
  },
];

export default routes;
