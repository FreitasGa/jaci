import { Symptom } from "../types";

type SymptomItemProps = Symptom;

export default function SymptomItem({ name, description }: SymptomItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
