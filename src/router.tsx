import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';


const routes: RouteObject[] = [
 {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

const router = createBrowserRouter(routes);

export default router;