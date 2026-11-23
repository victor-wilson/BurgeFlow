import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider
 } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import CreateTransactionPinPage from "./Pages/CreateTransactionPinPage";
import ValidateEmailPage from "./Pages/ValidateEmailPage";
import AccountSuccessful from "./Components/Authentication/AccountSuccessful";


function App() {

  //Page Routers for each page on the app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="create-transaction-pin" element={<CreateTransactionPinPage />} />
        <Route path="validate-email" element={<ValidateEmailPage />} />
        <Route path="account-successful" element={<AccountSuccessful />} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;

}

export default App