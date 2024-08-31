"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/pro-solid-svg-icons";
import { useEffect } from "react";

export default function DarkToggle() {
  const toggleDarkMode = () => {
    const currentMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentMode ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="size-8 flex justify-center items-center rounded-full hover:bg-blue-200 dark:hover:bg-white/10 hover:scale-110 transition-all drop-shadow flex-col group"
    >
      <div className="invisible group-hover:visible absolute bottom-12 pointer-events-none  p-1 px-2 bg-blue-200 dark:bg-black/25 rounded-full">
        <p className="text-xs text-nowrap ">Dark Mode</p>
      </div>
      <FontAwesomeIcon icon={faLightbulb} />
    </button>
  );
}
