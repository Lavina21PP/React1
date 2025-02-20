import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header bg-black">
        <div className="container">
          <div className="flex justify-between items-center !py-[0.8rem]">
            <div className="w-[94px]">
              <img src="/img/logo.png" alt="" />
            </div>
            <div className="w-[48px] h-[48px] overflow-hidden rounded-full">
              <img src="/img/img1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
