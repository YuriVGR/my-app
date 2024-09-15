export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <h1 className="text-6xl font-semibold text-center opacity-0 animate-slidein300">
        {"Hi, I'm "}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-violet-400 dark:to-violet-600">
          Yuri
        </span>
        <br />
        {"And this is"}
        <br />
        {"My "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-violet-400 dark:to-violet-600">
          portifolio
        </span>
      </h1>
    </main>
  );
}
