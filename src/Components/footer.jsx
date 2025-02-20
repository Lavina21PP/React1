import React from "react";
import {
  iconHome,
  iconHomeFull,
  iconMessage,
  iconPerson,
  iconPrivate,
  iconSetting,
  iconStore,
} from "../func/googleicon";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="flex justify-evenly bg-[#7cc2ff] fixed w-full bottom-0">
          <Button className="!py-3 w-[20%] !rounded-none flex flex-col justify-center text-center">
            <div className="flex justify-center">{iconHomeFull()}</div>
            <div className="name">Home</div>
          </Button>
          <Button className="!py-3 w-[20%] !rounded-none flex flex-col justify-center text-center">
            <div className="flex justify-center">{iconStore()}</div>
            <div className="name">Mystore</div>
          </Button>
          <Button className="!py-3 w-[20%] !rounded-none flex flex-col justify-center text-center">
            <div className="flex justify-center">{iconMessage()}</div>
            <div className="name">Message</div>
          </Button>
          <Button className="!py-3 w-[20%] !rounded-none flex flex-col justify-center text-center">
            <div className="flex justify-center">{iconPrivate()}</div>
            <div className="name">Private</div>
          </Button>
          <Button className="!py-3 w-[20%] !rounded-none flex flex-col justify-center text-center">
            <div className="flex justify-center">{iconSetting()}</div>
            <div className="name">Setting</div>
          </Button>
        </div>{" "}
      </div>
    </>
  );
};

export default Footer;
