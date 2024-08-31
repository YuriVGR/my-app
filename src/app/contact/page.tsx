import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import ListItem from "@/components/customlist";

export default function AboutMe() {
  return (
    <main className="flex justify-center items-center h-full w-full overflow-x-hidden">
      <div className="flex px-72">
        <img
          src="https://utfs.io/f/eae996eb-ba41-4c85-850e-283ed20e8742-f1cguv.jpg"
          alt=""
          className="size-72 rounded-full outline-dashed outline-blue-400 outline-4 select-none opacity-0 animate-slidein300"
        />
        <div className="flex flex-col">
          <h1 className="text-6xl font-medium opacity-0 animate-slidein300  ">
            Yuri Guimarães Ribeiro
          </h1>
          <p className="pl-10 font-light text-wrap w-full opacity-0 animate-slidein600">
            Hi, I'm Yuri, I'm a beginner Front-end Developer that knows a little
            bit of UI/UX
          </p>
          <div className="flex pl-14 gap-x-12 mt-4">
            <div className="opacity-0 animate-slidein900">
              <h2 className="text-2xl font-medium">Hard Skills</h2>
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
