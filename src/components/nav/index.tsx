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
    <header className="absolute bottom-5 w-screen flex justify-center pointer-events-none">
      <nav className="flex flex-row gap-x-5 bg-white dark:bg-black/25 p-2 px-4 pointer-events-auto rounded-full hover:scale-125 transition-transform drop-shadow">
        <NavLink page="/" icon={faHouse} />
        <NavLink page="/aboutme" icon={faQuestion} />
        <NavLink page="/projects" icon={faRectangleHistory} />
        <NavLink page="/contact" icon={faPhone} />
        <DarkToggle/>
      </nav>
    </header>
  );
}
