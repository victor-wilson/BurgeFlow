import { useNavigate } from "react-router"
import SignInWrapper from "../Components/SignInWrapper";

const SignInPage = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate("/dashboard")
  }

  return (
    <>
      <SignInWrapper formSubmit={handleSignIn} />
    </>
  )
}

export default SignInPage
