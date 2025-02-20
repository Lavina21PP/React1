import * as React from "react";
import { iconEyeOnFull, iconEyeOffFull } from "../func/googleicon";
import { Button } from "@mui/material";
export function InputIcon({
  Icon,
  placeholder,
  id,
  fontsize,
  onchange,
  value,
  isMobile,
}) {
  return (
    <div style={{ position: "relative" }}>
      <input
        autoComplete="n"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        style={{
          paddingLeft: "40px",
          fontSize: `${fontsize}`,
          cursor: isMobile && "default",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: isMobile ? "default" : "pointer",
        }}
      >
        {Icon()}
      </div>
    </div>
  );
}
export function InputSendMail({
  Icon,
  placeholder,
  id,
  fontsize,
  onchange,
  onfocus,
  onblur,
  value,
  isMobile,
  nameBtn,
  colorBtnSend,
  Click,
  disabled,
}) {
  return (
    <div style={{ position: "relative" }}>
      <input
        autoComplete="n"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        onFocus={onfocus}
        onBlur={onblur}
        disabled={disabled}
        style={{
          paddingLeft: "40px",
          paddingRight: "84px",
          fontSize: `${fontsize}`,
          cursor: isMobile && "default",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: isMobile ? "default" : "pointer",
        }}
      >
        {Icon()}
      </div>
      <div
        className="btnSend"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0.5rem",
          display: "flex",
          overflow: "hidden",
          borderTopRightRadius: "3px",
          borderBottomRightRadius: "3px",
        }}
      >
        <Button
          sx={{
            width: "100%",
            height: "100%",
            padding: "0.36rem 1.5rem",
            textTransform: "none",
            color: "#000",
            backgroundColor: colorBtnSend,
            cursor: isMobile ? "default" : "pointer",
          }}
          onClick={Click}
          disabled={disabled}
        >
          {nameBtn}
        </Button>
      </div>
    </div>
  );
}
export function InputIconPassword({
  Icon,
  placeholder,
  id,
  fontsize,
  onchange,
  value,
  isMobile,
  disabled,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ position: "relative" }}>
      <input
        autoComplete="n"
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          fontSize: `${fontsize}`,
          cursor: isMobile && "default",
        }}
        disabled={disabled && true}
        />
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        >
        {Icon()}
      </div>
      <div
        aria-label={showPassword ? "hide the password" : "display the password"}
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        onMouseUp={handleMouseUpPassword}
        >
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            cursor: isMobile ? "default" : "pointer",
          }}
          >
          {showPassword ? iconEyeOffFull() : iconEyeOnFull()}
        </div>
      </div>
    </div>
  );
}
