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
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
      <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
        <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <div className={`text-xl font-bold ${colorEnumToColorClass(color)}`}>{value}</div>
        <p className=" text-xs text-gray-500 dark:text-gray-400 ">
          {description}
        </p>
      </div>
    </div>
  );
}
