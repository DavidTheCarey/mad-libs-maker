import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react';


export default function AuthPage({setUser}) {
    const [logIn, setLogIn] = useState(false);

    function handleClick(){
        setLogIn(!logIn);
    }

  return (
    <main>
      <h1>AuthPage</h1>
      <div className="logSwitch" onClick={handleClick}>{!logIn ? "Already have an account? Click here" : "Don't have an account? Click here"}</div>
      {!logIn ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
    </main>
  );
}