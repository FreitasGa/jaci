import { type Symptom } from "../../types";

type SymptomItemProps = Symptom;

export default function SymptomItem({ name, description }: SymptomItemProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
