import { Color } from "../types";

type IndicatorBoxProps = {
  title: string;
  description?: string;
  value: string | number;
  color?: Color;
};

function getColorClass(color?: Color): string {
  const colorClass = {
    [Color.Green]: "text-[#62a8ac]",
    [Color.Yellow]: "text-[#efd28d]",
    [Color.Orange]: "text-[#f4a261]",
    [Color.Red]: "text-[#d4afb9]",
  };

  return colorClass[color ?? Color.Green];
}

export default function IndicatorBox({
  title,
  description,
  value,
  color,
}: IndicatorBoxProps) {
  return (
    <div className="rounded-lg border shadow-sm px-4 py-6 space-y-4 text-center">
      <h3 className="tracking-tight text-base font-medium">{title}</h3>
      <p className={`text-3xl font-bold ${getColorClass(color)}`}>
        {value}
      </p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}
