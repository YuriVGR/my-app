export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <h1 className="text-center text-6xl font-medium text-pretty select-none z-10 opacity-0 animate-slidein300 ">
        {"Hi, I'm "}
        <span className="bg-clip-text bg-gradient-to-b from-violet-400 to-violet-600 text-transparent font-semibold">
          Yuri
        </span>
        <br />
        {"And this is"}
        <br /> {"My "}
        <span className="bg-clip-text bg-gradient-to-b from-violet-400 to-violet-600 text-transparent font-semibold">
          portifolio
        </span>
      </h1>
    </main>
  );
}
