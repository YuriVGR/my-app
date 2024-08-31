import Link from "next/link";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavType = {
  text: string;
  page: string;
  icon: IconDefinition;
};

export default function NavLink({
  page,
  icon,
  text,
}: NavType): React.ReactElement<NavType> {
  return (
    <div className="size-8 flex justify-center items-center rounded-full hover:bg-blue-200 dark:hover:bg-white/10 hover:scale-110 transition-all drop-shadow flex-col group">
      <div className="invisible group-hover:visible absolute bottom-12 pointer-events-none  p-1 px-2 bg-blue-200 dark:bg-black/25 rounded-full ">
        <p className="text-xs text-nowrap font-light">{text}</p>
      </div>
      <Link href={page} className="">
        <FontAwesomeIcon icon={icon} />
      </Link>
    </div>
  );
}
