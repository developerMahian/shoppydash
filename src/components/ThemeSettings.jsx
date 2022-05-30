import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, isClicked } =
    useStateContext();

  return (
    <div className="relative z-[1100]">
      <div
        id="themeSettings"
        className={`${
          isClicked.themeSettings ? "right-0 visible" : "-right-full invisible"
        } w-fit fixed nav-item top-0 right-0 shadow-2xl transition-all duration-[0.4s]`}
      >
        <div className="float-right w-64 sm:w-80 md:w-[360px] h-screen dark:text-gray-200  bg-white dark:bg-[#484B52]">
          <div className="flex justify-between items-center p-4 ml-4">
            <p className="font-semibold text-lg">Settings</p>
            <Button
              icon={<MdOutlineCancel />}
              color="rgb(153, 171, 180)"
              bgHoverColor="light-gray"
              size="2xl"
              borderRadius="50%"
            />
          </div>

          <div className="flex-col border-t-1 border-color p-4 ml-4">
            <p className="font-semibold text-xl ">Theme Option</p>

            <div className="mt-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                Light
              </label>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                onChange={setMode}
                className="cursor-pointer"
                checked={currentMode === "Dark"}
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>

          <div className="p-4 border-t-1 border-color ml-4">
            <p className="font-semibold text-xl ">Theme Colors</p>
            <div className="flex flex-wrap gap-3">
              {themeColors.map((item, index) => (
                <TooltipComponent
                  key={index}
                  content={item.name}
                  position="TopCenter"
                >
                  <div
                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                    key={item.name}
                  >
                    <button
                      type="button"
                      className="h-10 w-10 rounded-full cursor-pointer"
                      style={{ backgroundColor: item.color }}
                      onClick={() => setColor(item.color)}
                    >
                      <BsCheck
                        className={`ml-2 text-2xl text-white ${
                          item.color === currentColor ? "block" : "hidden"
                        }`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isClicked.themeSettings
            ? "opacity-100 visibile"
            : "opacity-0 invisible"
        } fixed inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-[400ms]`}
      />
    </div>
  );
};

export default ThemeSettings;
