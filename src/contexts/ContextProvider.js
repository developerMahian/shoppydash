import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  themeSettings: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  useEffect(() => {
    window.addEventListener("mousedown", outsideClick);
    return () => window.removeEventListener("mousedown", outsideClick);
  }, []);

  const outsideClick = (e) => {
    const popUpBtns = [
      "themeSettings",
      "cart",
      "chat",
      "notification",
      "userProfile",
    ].map((id) => document.getElementById(id));

    for (let i = 0; i < popUpBtns.length; i++) {
      if (popUpBtns[i]?.contains(e.target)) return;
    }

    for (let i = 0; i < popUpBtns.length; i++) {
      if (!popUpBtns[i]?.contains(e.target)) setIsClicked(initialState);
    }
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
