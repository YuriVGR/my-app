import NavLink from "../navlinks";
import DarkToggle from "../darktoggle";
import {
  faQuestion,
  faHouse,
  faRectangleHistory,
  faPhone,
} from "@fortawesome/pro-solid-svg-icons";


export default function NavBar() {
  return (
    <header className="absolute bottom-5 w-screen flex justify-center pointer-events-none overflow-visible z-20">
      <nav className="flex flex-row gap-x-5 bg-white dark:bg-black/25 p-2 px-4 pointer-events-auto rounded-full hover:scale-110 transition-transform drop-shadow items-center">
        <NavLink page="/" icon={faHouse} text="Home" />
        <NavLink page="/projects" icon={faRectangleHistory} text="Projects"/>
        <NavLink page="/aboutme" icon={faQuestion} text="About Me"/>
        <NavLink page="/contact" icon={faPhone} text="Contact"/>
        <DarkToggle />
      </nav>
    </header>
  );
}
