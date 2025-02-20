import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import Cookies from "js-cookie";
import {
  InputIcon,
  InputIconPassword,
  InputSendMail,
} from "../Components/input";
import "../style/sign.css";
import { Button } from "@mui/material";
import { iconPassword, iconKey, iconMail } from "../func/googleicon";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/alert";

const Forgotpass = ({ isMobile, noback }) => {
  const navigate = useNavigate();
  const [countEmailOtp, setCountEmailOtp] = useState("Send");
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [dataAlert, setDataAlert] = useState("");

  const openAlert = (type, data) => {
    setShowAlert(true);
    setTypeAlert(type);
    setDataAlert(data);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const [step, setStep] = useState(sessionStorage.getItem("step") || "1");
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const [disabledInputEmail, setDisabledInputEmail] = useState(false);
  const [disabled1, setDisabled1] = useState(false);

  const [inputPassword1, setInputPassword1] = useState(
    sessionStorage.getItem("inputPassword1") || ""
  );
  const [inputPassword2, setInputPassword2] = useState(
    sessionStorage.getItem("inputPassword2") || ""
  );
  const [inputEmail, setInputEmail] = useState(
    sessionStorage.getItem("inputEmail") || ""
  );
  const [inputOtp, setInputOtp] = useState(
    sessionStorage.getItem("inputOtp") || ""
  );

  const [showSel, setShowSel] = useState(false);

  const onChange5 = (e) => {
    setInputEmail(e.target.value);
  };
  const onChange6 = (e) => {
    if (e.target.value.length <= 6) {
      setInputOtp(e.target.value);
    }
  };
  const onChange7 = (e) => {
    setInputPassword1(e.target.value);
  };
  const onChange8 = (e) => {
    setInputPassword2(e.target.value);
  };

  const next = (e) => {
    setStep(e);
  };

  const setBtn = () => {
    switch (step) {
      case "1":
        setBtn1("Cancel");
        setBtn2("Next");
        break;
      case "2":
        setBtn1("Back");
        setBtn2("Confirm");
        break;
    }
  };

  const offShow = (e) => {
    e.stopPropagation();
    if (showSel) {
      setShowSel(false);
    }
  };

  useEffect(() => {
    setBtn();
    sessionStorage.setItem("step", step);
  }, [step]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("step");
      sessionStorage.removeItem("inputPassword1");
      sessionStorage.removeItem("inputPassword2");
    };
  }, []);
  return (
    <>
      {/* <Auth /> */}
      {showAlert && (
        <Alert
          type={typeAlert}
          message={dataAlert}
          onClose={() => closeAlert()}
        />
      )}
      {/* {isMobile && Zoom} */}
      {noback}
      <div className="sign" onClick={offShow}>
        <div className="krpsign">
          <div className="container">
            <div className="krpLogo">
              <div className="krpimg">
                <img src={logo} alt="" />
              </div>
              <div className="text">Forgot Password</div>
            </div>
            {step === "1" ? (
              <div className="input">
                <InputSendMail
                  Icon={iconMail}
                  placeholder={"Email"}
                  id={"Email"}
                  fontsize={"1rem"}
                  onchange={onChange5}
                  value={inputEmail}
                  nameBtn={countEmailOtp}
                  disabled={disabledInputEmail}
                />
                <InputIcon
                  Icon={iconKey}
                  placeholder={"OTP"}
                  id={"Otp"}
                  fontsize={"1rem"}
                  onchange={onChange6}
                  value={inputOtp}
                />
              </div>
            ) : (
              step === "2" && (
                <div className="input">
                  <InputIconPassword
                    Icon={iconPassword}
                    placeholder={"Password"}
                    id={"Password1"}
                    fontsize={"1rem"}
                    onchange={onChange7}
                    value={inputPassword1}
                    isMobile={isMobile}
                    disabled={disabled1}
                  />

                  <InputIconPassword
                    Icon={iconPassword}
                    placeholder={"Confirm Password"}
                    id={"Confirm"}
                    fontsize={"1rem"}
                    onchange={onChange8}
                    value={inputPassword2}
                    isMobile={isMobile}
                    disabled={disabled1}
                  />
                </div>
              )
            )}
            <div style={{ height: "10px" }}></div>
            <div className="button buttonup">
              <Button
                type="button"
                onClick={() => {
                  if (step === "1") {
                    navigate("../Login");
                  } else if (step === "2") {
                    setStep("1");
                  }
                }}
                disabled={disabled1 && true}
              >
                {btn1}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  if (step === "1") {
                    next("2");
                  }
                }}
                disabled={disabled1 && true}
              >
                {btn2}
              </Button>
            </div>
            <div style={{ height: "80px" }}></div>
          </div>
        </div>
        <div className="last">
          <div
            className="text"
            style={{ cursor: isMobile ? "default" : "pointer" }}
            onClick={() => navigate("../Login")}
          >
            have an account ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpass;
