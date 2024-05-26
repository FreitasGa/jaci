import { type Measure } from "../../types";

type MeasureItemProps = Measure;

export default function MeasureItem({ name, description }: MeasureItemProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
