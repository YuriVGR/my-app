import Link from "next/link";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavType = {
  page: string;
  icon: IconDefinition;
};

export default function NavLink({
  page,
  icon,
}: NavType): React.ReactElement<NavType> {
  return (
    <Link
      href={page}
      className="size-8 flex justify-center items-center rounded-full hover:bg-blue-200 dark:hover:bg-white/10 hover:scale-110 transition-all drop-shadow"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
