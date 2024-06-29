import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import "./index.css";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";
// import Layout from "./components/RoutePractice/Layout.jsx";
// import Home from "./components/RoutePractice/components/Home.jsx";
// import About from "./components/RoutePractice/components/About.jsx";
// import Contact from "./components/RoutePractice/components/Contact.jsx";
// import Github from "./components/RoutePractice/components/Github.jsx";
// import User from "./components/RoutePractice/components/User.jsx";
// import { githubInfoLoader } from "./components/RoutePractice/components/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userId" element={<User />} />
//       <Route loader={githubInfoLoader} path="github" element={<Github />} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
    {/* <RouterProvider  /> */}
  </React.StrictMode>
);
