import ListItem from "@/components/customlist";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-full w-full n py-9">
      <div className="md:flex-row flex md:gap-x-8 flex-col items-center">
        <img
          src="https://utfs.io/f/eae996eb-ba41-4c85-850e-283ed20e8742-f1cguv.jpg"
          alt=""
          className="size-72 rounded-full border-dashed border-blue-400 border-4 select-none opacity-0 animate-slidein300"
        />
        <div className="flex flex-col items-center gap-y-5 md:items-start w-96 md:w-full">
          <h1 className="md:text-left text-4xl font-medium opacity-0 animate-slidein300 text-center">
            Yuri Guimarães Ribeiro
          </h1>
          <p className="text-center md:text-left md:text-lg font-light text-wrap w- md:w-full opacity-0 py-1 md:p-0 animate-slidein600 bg-blue-300/20  dark:bg-black/20 rounded-lg shadow-lg md:bg-transparent md:dark:bg-transparent md:shadow-none">
            {
              "Hi, I'm Yuri, I'm a beginner Front-end Developer that knows a little bit of UI/UX"
            }
          </p>
          <div className="flex md:justify-start justify-between w-full md:flex-row gap-x-8">
            <div className="opacity-0 animate-slidein900  py-1 px-4 rounded-lg dark:border-black/20 dark:bg-black/20 bg-blue-300/20 w-48 flex flex-col gap-1 shadow-lg">
              <h2 className="text-xl font-medium pl-2">Soft Skills</h2>
              <div>
                <ListItem item="Friendliness" />
                <ListItem item="Confidence" />
                <ListItem item="Conflict Resolution" />
              </div>
              <div>
                <ListItem item="Innovation" />
                <ListItem item="Motivated" />
                <ListItem item="Adaptability" />
              </div>
            </div>
            <div className="opacity-0 animate-slidein1200 py-1 px-4 rounded-lg shadow-lg dark:border-black/20 dark:bg-black/20 bg-blue-300/20 w-48 flex flex-col gap-1">
              <h2 className="text-xl font-medium pl-2">Hard Skills</h2>
              <ListItem item="Figma" />
              <ListItem item="Javascript" />
              <ListItem item="Typescript" />
              <ListItem item="React" />
              <ListItem item="Next.JS" />
              <ListItem item="React Native" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
