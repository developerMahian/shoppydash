import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const sidebarRef = useRef(null);

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  useEffect(() => {
    window.addEventListener("mousedown", sidebarOutsideClick);
    return () => window.removeEventListener("mousedown", sidebarOutsideClick);
  }, []);

  const sidebarOutsideClick = (e) => {
    if (!sidebarRef.current?.contains(e.target)) {
      // screenSize becomes undefined inside this code block... Don't know why..
      window.innerWidth <= 900 && setActiveMenu(false);
    }
  };

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) setActiveMenu(false);
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div
        ref={sidebarRef}
        className={`${
          !activeMenu && "-translate-x-full"
        } w-60 lg:w-72 fixed left-0 top-0 sidebar dark:bg-secondary-dark-bg bg-white transition-all duration-300 z-[100]`}
      >
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto md:border-r-[6px] border-transparent hover:border-0 pb-10">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>ShoppyDash</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          activeMenu ? "2lg:hidden" : "hidden"
        } fixed inset-0 bg-black/30 backdrop-blur-[1px] z-10`}
      />

      <div
        className={`${
          activeMenu ? "min-w-[240px] lg:min-w-[288px]" : "w-0 min-w-0"
        } hidden 2lg:block h-screen duration-300`}
        style={{ transitionProperty: "width, min-width" }}
      />
    </>
  );
};

export default Sidebar;
