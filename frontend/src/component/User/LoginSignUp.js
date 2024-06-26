import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link, redirect } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register, signUpWithGoogle } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate  } from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import {gapi} from "gapi-script";

const LoginSignUp = () => {
  const clientId = "1045613546992-lk67gqk2dlbt1scjtt1s5vpv67rrriq7.apps.googleusercontent.com";

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };


  const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { user2 } = useSelector(
    (state) => state.user2
  );

  useEffect(() => {
    gapi.load('client:auth2',()=>{gapi.client.init({clientId:clientId,scope:""})})
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
    navigate("/");
    }
    if (isAuthenticated && user2.flag==="initial") {
      navigate("/password/update/google");
      }
  }, [dispatch, error, alert, isAuthenticated,redirect]); 
  return (
      
      <Fragment>
        {loading ? (<Loader/>) : (<Fragment>
        <div className="LoginSignUpContainer">
          <div className="LoginSignUpBox">
            <div>
              <div className="login_signUp_toggle">
                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
            </div>
            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
              <div className="loginEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <Link to="/password/forgot">Forget Password ?</Link>
              <input type="submit" value="Login" className="loginBtn" />
              <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={(res)=>{
                console.log(res.profileObj);
                dispatch(signUpWithGoogle(res.profileObj.name,res.profileObj.email));
              }} onFailure={()=>{console.log("bad")}} cookiePolicy={'single_host_origin'}/>
            </form>
            <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
                <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={(res)=>{
                console.log(res.profileObj);
                dispatch(signUpWithGoogle(res.profileObj.name,res.profileObj.email));
              }} onFailure={()=>{console.log("bad")}} cookiePolicy={'single_host_origin'}/>
              </form>
          </div>
        </div>
      </Fragment>)}
      </Fragment>
  );
};

export default LoginSignUp;
