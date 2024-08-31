import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";

type ListType = {
  item: string;
};

export default function ListItem({
  item,
}: ListType): React.ReactElement<ListType> {
  return (
    <div className="flex items-center gap-x-2 pl-2">
      <FontAwesomeIcon icon={faAngleRight} />
      <p>{item}</p>
    </div>
  );
}
