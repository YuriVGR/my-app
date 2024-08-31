"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/pro-solid-svg-icons";

export default function DarkToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="size-8 flex justify-center items-center rounded-full hover:bg-blue-200 dark:hover:bg-blue-950/20 hover:scale-110 transition-all drop-shadow"
    >
      <FontAwesomeIcon icon={faLightbulb} />
    </button>
  );
}
