import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLoader } from "@fortawesome/pro-duotone-svg-icons";

export default function Page() {
  return (
    <main className="flex  justify-center items-center h-full w-full gap-5">
      <div className="flex flex-col opacity-0 animate-slidein300">
        <h1 className="text-6xl font-black">WORK IN PROGRESS</h1>
        <FontAwesomeIcon icon={faLoader} spin size="4x" />
      </div>
    </main>
  );
}
