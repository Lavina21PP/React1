import * as React from "react";
import { iconMan, iconWoman } from "../func/googleicon";
import { Button } from "@mui/material";
import '../style/select.css'
export function Select({
  Icon,
  placeholder,
  fontsize,
  onchange,
  onShow,
  setShowSel,
  showSel,
}) {
  const [value, setValue] = React.useState(placeholder);
  const clickM = (e) => {
    e.stopPropagation();
  };

  const setGender = (e) => {
    setShowSel(false);
    switch (e) {
      case "M":
        setValue("Male");
        onchange("Male");
        break;
      case "F":
        setValue("Female");
        onchange("Female");
        break;
    }
  };

  return (
    <>
      <div className="select">
        <div className="krpselect">
          <Button onClick={onShow}>
            {value === "Male" ? (
              <div className="icon">{iconMan()}</div>
            ) : value === "Female" ? (
              <div className="icon">{iconWoman()}</div>
            ) : (
              <div className="icon">{Icon()}</div>
            )}
            <div
              className="text"
              style={{
                fontSize: `${fontsize}`,
                color: value === "Gender" ? "#aaa" : "#000",
              }}
            >
              {value}
            </div>
          </Button>
          {showSel && (
            <div className="value" onClick={clickM}>
              <Button
                onClick={() => {
                  setGender("M");
                }}
                style={{ backgroundColor: value === "Male" && "#ccc" }}
              >
                <div className="iconGender">{iconMan()}</div>
                <div className="text">Male</div>
              </Button>
              <Button
                onClick={() => {
                  setGender("F");
                }}
                style={{ backgroundColor: value === "Female" && "#ccc" }}
              >
                <div className="iconGender">{iconWoman()}</div>
                <div className="text">Female</div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
