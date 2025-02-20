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
import {
  iconPersonEdit,
  iconPerson,
  iconGender,
  iconPassword,
  iconKey,
  iconMail,
} from "../func/googleicon";
import { useNavigate } from "react-router-dom";
import { Select } from "../Components/select";
import Alert from "../Components/alert";


const Signup = ({ isMobile, noback }) => {
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

  const [inputFname, setInputFname] = useState(
    sessionStorage.getItem("inputFname") || ""
  );
  const [inputLname, setInputLname] = useState(
    sessionStorage.getItem("inputLname") || ""
  );
  const [inputUsername, setInputUsername] = useState(
    sessionStorage.getItem("inputUsername") || ""
  );
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
  const [inputGender, setInputGender] = useState(
    sessionStorage.getItem("inputGender") || "Gender"
  );
  const [showSel, setShowSel] = useState(false);

  const onChange1 = (e) => {
    setInputFname(e.target.value);
  };
  const onChange2 = (e) => {
    setInputLname(e.target.value);
  };
  const onChange3 = (e) => {
    setInputUsername(e.target.value);
  };
  const onChange4 = (e) => {
    setInputGender(e);
  };
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
        setBtn2("Next");
        break;
      case "3":
        setBtn1("Back");
        setBtn2("Next");
        break;
      case "4":
        setBtn1("Back");
        setBtn2("OK");
        break;
    }
  };
  const onShow = (e) => {
    e.stopPropagation();
    setShowSel((prevState) => !prevState);
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
      sessionStorage.removeItem("inputFname");
      sessionStorage.removeItem("inputLname");
      sessionStorage.removeItem("inputUsername");
      sessionStorage.removeItem("inputGender");
      sessionStorage.removeItem("inputPassword1");
      sessionStorage.removeItem("inputPassword2");
      sessionStorage.removeItem("inputOtp");
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
              <div className="text">Register</div>
            </div>
            {step === "1" ? (
              <div className="input">
                <InputIcon
                  Icon={iconPersonEdit}
                  placeholder={"Frist Name"}
                  id={"Fname"}
                  fontsize={"1rem"}
                  onchange={onChange1}
                  value={inputFname}
                />
                <InputIcon
                  Icon={iconPersonEdit}
                  placeholder={"Last Name"}
                  id={"Lname"}
                  fontsize={"1rem"}
                  onchange={onChange2}
                  value={inputLname}
                />
              </div>
            ) : step === "2" ? (
              <div className="input">
                <InputIcon
                  Icon={iconPerson}
                  placeholder={"Username"}
                  id={"Username"}
                  fontsize={"1rem"}
                  onchange={onChange3}
                  value={inputUsername}
                />
                <Select
                  Icon={iconGender}
                  placeholder={inputGender}
                  fontsize={"1rem"}
                  onchange={onChange4}
                  clickBody={onShow}
                  showSel={showSel}
                  setShowSel={setShowSel}
                  onShow={onShow}
                />
              </div>
            ) : step === "3" ? (
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
              step === "4" && (
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
              <Button type="button"
                onClick={() => {
                  if (step === "1") {
                    navigate("../Login");
                  } else if (step === "2") {
                    setStep("1");
                  } else if (step === "3") {
                    setStep("2");
                  } else if (step === "4") {
                    setStep("3");
                  }
                }}
                disabled={disabled1 && true}
              >
                {btn1}
              </Button>
              <Button type="button"
                onClick={() => {
                  if (step === "1") {
                    next("2");
                  } else if (step === "2") {
                    next("3");
                  } else if (step === "3") {
                    next("4");
                  } else if (step === "4") {
                    
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
            Have an account Login ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
