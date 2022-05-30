import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  PageRoutes,
} from "./components";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
    handleClick,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              type="button"
              onClick={() => handleClick("themeSettings")}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        <Sidebar />

        <div className="dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full">
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <div>
            <ThemeSettings />

            <PageRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
