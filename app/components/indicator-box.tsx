import { Color } from "../types";

type IndicatorBoxProps = {
  title: string;
  description?: string;
  value: string | number;
  color?: Color
};

const colorEnumToColorClass = (color?: Color): string => {
  switch (color) {
    case Color.Green:
      return 'text-green-500';
    case Color.Yellow:
      return 'text-yellow-500';
    case Color.Orange:
      return 'text-orange-500';
    case Color.Red:
      return 'text-red-500';
    default:
      return '';
  }
};

export default function IndicatorBox({
  title,
  description,
  value,
  color
}: IndicatorBoxProps) {
  return (
    <div className="rounded-lg border shadow-sm px-4 py-6 space-y-4 text-center">
      <h3 className="tracking-tight text-base font-medium">
        {title}
      </h3>
      <p className="text-3xl font-bold text-[#62a8ac]">{value}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}
