"use client";

import Link from "next/link";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

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
  const pathname = usePathname();

  return (
    <div className=" flex justify-center items-center hover:scale-110 transition-all drop-shadow flex-col group">
      <div className="invisible group-hover:visible absolute bottom-10 pointer-events-none  p-1 px-2 bg-blue-100 dark:bg-black/25 rounded-full ">
        <p className="text-xs text-nowrap font-normal">{text}</p>
      </div>
      <Link
        href={page}
        className={clsx(
          "flex items-center justify-center size-7 rounded-full",
          {
            "bg-blue-300 hover:bg-blue-300 text-white dark:bg-white dark:text-black dark:hover:text-black dark:hover:bg-white":
              pathname === page,
          },
          {
            "hover:bg-blue-100 dark:hover:bg-white/10": pathname !== page,
          }
        )}
      >
        <FontAwesomeIcon icon={icon} size="sm" />
      </Link>
    </div>
  );
}
