import React, { useState, useEffect, useContext } from "react";
import { InputIcon, InputIconPassword } from "../Components/input";
import { CheckboxBasic } from "../Components/checkbox";
import { Button } from "@mui/material";
import logo from "../assets/img/logo.png";
import "../style/sign.css";
import {
  iconGoogle,
  iconFacebook,
  iconPerson,
  iconPassword,
} from "../func/googleicon";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/alert";
import { MyContext } from "../App";

const Signin = () => {
  const { isMobile, noback } = useContext(MyContext);

  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [dataAlert, setDataAlert] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const onChange1 = (e) => {
    setInputEmail(e.target.value);
  };
  const onChange2 = (e) => {
    setInputPassword(e.target.value);
  };
  const openAlert = (type, data) => {
    setShowAlert(true);
    setTypeAlert(type);
    setDataAlert(data);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const onSubmit = (e) => {
    e.stopPropagation()
    navigate('../')
  }

  useEffect(() => {

  }, []);



  useEffect(() => {
    const handlePopState = () => {
      navigate(1); // ดันกลับไปหน้าปัจจุบัน
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
  return (
    <>
      {/* {isMobile && Zoom} */}
      {/* <Auth /> */}
      {showAlert && (
        <Alert
          type={typeAlert}
          message={dataAlert}
          onClose={() => closeAlert()}
        />
      )}
      {noback}
      <div className="sign">
        <form onSubmit={onSubmit}>
          <div className="krpsign">
            <div className="container">
              <div className="krpLogo">
                <div className="krpimg">
                  <img src={logo} alt="" />
                </div>
                <div className="text">Login</div>
              </div>

              <div className="input">
                <InputIcon
                  Icon={iconPerson}
                  placeholder={"Username"}
                  id={"Username"}
                  fontsize={"1rem"}
                  onchange={onChange1}
                  value={inputEmail}
                />
                <InputIconPassword
                  Icon={iconPassword}
                  placeholder={"Password"}
                  id={"Password"}
                  fontsize={"1rem"}
                  onchange={onChange2}
                  value={inputPassword}
                  isMobile={isMobile}
                />
              </div>

              <div className="remember-forgot">
                <div className="remember">
                  <div className="checkbox">
                    <CheckboxBasic isMobile={isMobile} id={"remember"} />
                  </div>
                  <div className="text">Remember me</div>
                </div>
                <div className="forgot">
                  <div
                    className="text"
                    style={{ cursor: isMobile ? "default" : "pointer" }}
                    onClick={()=>navigate('../ForgotPassword')}
                  >
                    Forgot password
                  </div>
                </div>
              </div>
              <div className="button buttonin">
                <Button
                  type="submit"
                  style={{ cursor: isMobile ? "default" : "pointer" }}
                >
                  Login
                </Button>
              </div>
              <div className="hr">
                <hr />
                <b>Or Continue With</b>
                <hr />
              </div>
              <div className="signInWith">
                <div className="button-google">
                  <Button type="button" style={{ cursor: isMobile ? "default" : "pointer" }}>
                    <div className="krpbtn">
                      <div className="icon">{iconGoogle()}</div>
                      <div className="text">Google</div>
                    </div>
                  </Button>
                </div>
                <div className="button-google">
                  <Button type="button" style={{ cursor: isMobile ? "default" : "pointer" }}>
                    <div className="krpbtn">
                      <div className="icon">{iconFacebook()}</div>
                      <div className="text">Facebook</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div
              className="text"
              style={{ cursor: isMobile ? "default" : "pointer" }}
              onClick={() => navigate("../Register")}
            >
              Don't have an account ?
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
