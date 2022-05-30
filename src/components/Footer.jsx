import { FaArrowCircleUp, FaGithubAlt, FaTwitter } from "react-icons/fa";
import Fiverr from "../data/svgAssets/Fiverr";

const Footer = () => (
  <footer className="h-48 overflow-hidden relative mt-32">
    <div className="flex flex-col items-center justify-end h-full pb-5 z-10 before:absolute before:top-0 before:left-1/2 before:-ml-[75rem] before:w-[150rem] before:h-[150rem] before:rounded-full before:bg-gray-200/60 before:dark:bg-gray-700/60 before:z-0">
      <section className="flex gap-8 justify-center items-center mb-6 z-10">
        <a
          href="https://twitter.com/DeveloperMahian"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            className={socialIconsClass + " text-sky-500 dark:text-sky-400"}
          />
        </a>

        <a
          href="https://www.fiverr.com/dev_mahian"
          target="_blank"
          rel="noreferrer"
          className="animate-bounce"
        >
          <Fiverr />
        </a>

        <a
          href="https://github.com/developerMahian"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt className={socialIconsClass + " dark:text-white"} />
        </a>
      </section>

      <section className="text-gray-500 text-xs tracking-wide text-center font-mono font-semibold mb-3.5 z-10">
        Copyright © 2022, All Right Reserved by{" "}
        <a
          href="https://www.fiverr.com/dev_mahian"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-red-500 hover:text-red-600 hover:scale-105 transition-all duration-300"
        >
          Mahian Ahmed
        </a>
      </section>

      <button
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        className="z-10"
      >
        <FaArrowCircleUp className="text-[40px] text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300" />
      </button>
    </div>
  </footer>
);

const socialIconsClass = "text-2xl hover:rotate-[20deg] transition-transform";

export default Footer;
