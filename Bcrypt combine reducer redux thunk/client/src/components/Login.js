import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TopNavigation from "./TopNavigation";

const Login = () => {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let loginUsingFormData = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    try {
      let JSONData = await fetch("http://localhost:2024/login", reqOptions);
      let JSOData = await JSONData.json();
      console.log(JSOData);
      alert(JSOData.status);
      if (JSOData.msg == "failure") {
        alert(JSOData.status);
      } else {
        dispatch({ type: "login", data: JSOData.data });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let onLogin = () => {
    return async () => {
      let dataToSend = new FormData();
      dataToSend.append("email", emailInputRef.current.value);
      dataToSend.append("password", passwordInputRef.current.value);
      let reqOptions = {
        method: "POST",
        body: dataToSend,
      };
      try {
        let JSONData = await fetch("http://localhost:2024/login", reqOptions);
        let JSOData = await JSONData.json();
        console.log(JSOData);
        alert(JSOData.status);
        if (JSOData.msg == "failure") {
          alert(JSOData.status);
        } else {
          dispatch({ type: "login", data: JSOData.data });
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  return (
    <div className="login">

      <form>
        <label>Email</label>
        <input ref={emailInputRef}></input>
        <label>Password</label>
        <input ref={passwordInputRef}></input>
        <div>
          <button
            type="button"
            onClick={() => {
              // dispatch(loginUsingFormData());
              dispatch(onLogin());
            }}
          >
            Login
          </button>
        </div>
     <Link to="/signup">Signup</Link>
      </form>
    </div>
  );
};

export default Login;
