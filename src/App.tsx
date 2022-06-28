import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "./api";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { loginState, userState } from "./stores/atoms";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

function App() {
  const setIsLogin = useSetRecoilState(loginState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      const getUser = async () => {
        const res = await getData("users/current");
        setUser(res.data);
      };
      getUser();
    } else setIsLogin(false);
  }, [setIsLogin, setUser]);

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
