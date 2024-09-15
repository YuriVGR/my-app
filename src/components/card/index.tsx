import Link from "next/link";

type CardType = {
  name: string;
  url: string;
  description: string;
  id: string;
};

const myBackground = {
  test: "bg-[url(https://as1.ftcdn.net/v2/jpg/05/16/19/92/1000_F_516199248_EHTzDOtDwwsUfXYL2NR6dT8XPP3udCFW.jpg)]",
};

export default function Card({
  name,
  description,
  url,
  id,
}: CardType): React.ReactElement<CardType> {
  return (
    <Link
      className={`flex flex-col group justify-end w-64 h-32 bg-[] rounded-xl overflow-hidden bg-cover`}
      style={{ backgroundImage: `url(${url})` }}
      href={`/projects/${id}`}
    >
      <div className="w-full  h-0 group-hover:h-fit bg-black/60 transition-all rounded-t-lg group-hover:p-2 overflow-clip backdrop-blur">
        <h1 className="">{name}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
