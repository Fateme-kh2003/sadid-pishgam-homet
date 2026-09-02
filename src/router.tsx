import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import RootLayout from "./Layout/RootLayout"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from './pages/Projects';
import Services from './pages/Services';
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./components/Admin/Layout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminServices from "./pages/Admin/AdminServices";
import AdminAbout from "./pages/Admin/AsminAbout";
import AdminFooter from "./pages/Admin/AdminFooter";
import ChangePassword from "./pages/Admin/ChangePassword";
import AdminHome from "./pages/Admin/AdminHome";

const routes: RouteObject[] = [
 {
    path: "/",
    element: <RootLayout />,
    children:[
      {index: true ,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/services",element:<Services/>},
      {path:"/projects",element:<Projects/>},
    ]
  },
  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
    { index: true, element: <Dashboard /> },
    { path:"home", element:<AdminHome/>},
    { path: "projects", element: <AdminProjects /> },
    { path: "services", element: <AdminServices /> },
    { path: "about", element: <AdminAbout /> },
    { path: "footer", element: <AdminFooter /> },
    { path: "change-password", element: <ChangePassword /> },
  ],
  },
];

const router = createBrowserRouter(routes);

export default router;