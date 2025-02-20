import React, {
  useState,
  lazy,
  useEffect,
  Suspense,
  createContext,
} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import './style/header.css'
import './style/home.css'
import Loading from "./Components/loading.jsx";
import Chat from "./Components/chat.jsx";


// ใช้ React.lazy ในการโหลดคอมโพเนนต์
const Home = lazy(() => import("./pages/home.jsx"));
const Notfound = lazy(() => import("./pages/notFound.jsx"));
const Signin = lazy(() => import("./pages/signIn.jsx"));
const Signup = lazy(() => import("./pages/signUp.jsx"));
const Forgotpass = lazy(() => import("./pages/forgotPass.jsx"));
const PreventBackNavigation = lazy(() => import("./Components/noback.jsx"));

export const MyContext = createContext();

function App() {
  const [isMobile, setIsMobile] = useState(false);
  //checkMobile
  const checkIfMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  useEffect(() => {
    //mobile
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    //blockZoom
    const handleGesture = (e) => {
      e.preventDefault();
      document.body.style.zoom = 1;
    };

    document.addEventListener("gesturestart", handleGesture);
    return () => {
      document.removeEventListener("gesturestart", handleGesture);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <MyContext.Provider value={{ isMobile, noback: <PreventBackNavigation /> }}>
      {/* ใช้ Suspense เพื่อแสดง fallback ระหว่างที่คอมโพเนนต์ถูกโหลด */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Login" element={<Signin />} />
          <Route path="/Register" element={<Signup />} />
          <Route path="/ForgotPassword" element={<Forgotpass />} />
        </Routes>
      </Suspense>
    </MyContext.Provider>
  );
}

export default App;
