import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import Header from "../Components/header";
import { Button } from "@mui/material";
import { iconClose, iconSearch } from "../func/googleicon";
import Store from "../Components/store";
import Footer from "../Components/footer";

const Home = () => {
  const { isMobile, noback } = useContext(MyContext);
  const navigate = useNavigate();

  const buttonLabels = [
    "ຮ້ານຄ້າທັງໝົດ",
    "ຮ້ານຄ້າທັງໝົດ",
    "ຮ້ານຄ້າທັງໝົດ",
    "ຮ້ານຄ້າທັງໝົດ",
  ];

  return (
    <>
      {noback}
      <Header />
      <div className="home !mb-[5rem]">
        <div className="bg-[#7cc2ff] !py-4 border-b border-[#717171] top-[-1px] sticky">
          <div className="flex flex-col gap-4">
            <div className="container">
              <div className="relative w-full bg-[#ffffff] shadow-[2px_2px_3px_0_#000] border border-[#373737] rounded-[8px] overflow-hidden">
                <input
                  placeholder="Search"
                  type="text"
                  className="rounded-[7px] placeholder:text-[#e92020] text-black !py-[0.9rem] !px-[3rem] outline border-none"
                />
                <div className="absolute top-1/2 left-[10px] translate-y-[-50%] text-black">
                  {iconSearch("w-[28px] h-[28px]")}
                </div>
                <div className="absolute top-1/2 right-[10px] translate-y-[-50%] text-red-700">
                  {iconClose("w-[28px] h-[28px]")}
                </div>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-5 !py-3 !px-[3.2vw]">
              {buttonLabels.map((label, index) => (
                <div
                  key={index}
                  className="w-[120px] flex-none bg-blue-500 rounded-[6px] shadow-[3px_3px_3px_0_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] border border-[#4e4e4e]"
                >
                  <Button className="w-full">{label}</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box2">
          <Store />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
