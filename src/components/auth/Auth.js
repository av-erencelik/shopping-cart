import { useRef, useState } from "react";
import SignupForm from "./SignUpForm";

export default function Auth() {
  const login = useRef();
  const signup = useRef();
  const [isLogin, setIsLogin] = useState(false);
  function handleChangeAuth(e) {
    if (!e.target.classList.contains("selected") && e.target === login.current) {
      e.target.classList.add("selected");
      signup.current.classList.remove("selected");
      setIsLogin(true);
    } else if (!e.target.classList.contains("selected") && e.target === signup.current) {
      e.target.classList.add("selected");
      login.current.classList.remove("selected");
      setIsLogin(false);
    }
  }
  return (
    <div className="auth-container">
      <div className="auth">
        <div className="change-auth">
          <div className="login-button" onClick={handleChangeAuth} ref={login}>
            Login
          </div>
          <div className="signup-button selected" onClick={handleChangeAuth} ref={signup}>
            Sign-up
          </div>
        </div>
        {!isLogin && <SignupForm></SignupForm>}
      </div>
    </div>
  );
}
