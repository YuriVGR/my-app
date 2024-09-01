import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <h1 className="text-center text-6xl font-medium text-pretty select-none z-10 opacity-0 animate-slidein300 ">
        Hi, I'm{" "}
        <span className="bg-clip-text bg-gradient-to-b from-violet-400 to-violet-600 text-transparent font-semibold">
          Yuri
        </span>
        <br />
        And this is
        <br /> My{" "}
        <span className="bg-clip-text bg-gradient-to-b from-violet-400 to-violet-600 text-transparent font-semibold">
          portifolio
        </span>
      </h1>
      <div className="absolute h-screen w-screen z-0">
        
      </div>
    </main>
  );
}
