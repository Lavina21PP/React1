import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const PreventBackNavigation = () => {
  const navigate = useNavigate();

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
};

export default PreventBackNavigation;
