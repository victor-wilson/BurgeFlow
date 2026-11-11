import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider
 } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import SignInPage from "./Pages/SignInPage";


function App() {

  //Page Routers for each page on the app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SignInPage />} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;

}

export default App