import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLoader } from "@fortawesome/pro-duotone-svg-icons";

export default function Page() {
  return (
    <main className="flex  justify-center items-center h-full w-full ">
      <div className="flex flex-col opacity-0 animate-slidein300 gap-6">
        <h1 className="text-3xl font-black text-center md:text-6xl">WORK IN PROGRESS</h1>
        <FontAwesomeIcon icon={faLoader} spin size="2x" />
      </div>
    </main>
  );
}
