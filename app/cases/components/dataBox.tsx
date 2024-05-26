import { ColorEnum } from "../types";

interface DataBoxProps {
  title: string;
  value: string | number;
  description: string;
  color?: ColorEnum;
}

const colorEnumToColorClass = (color?: ColorEnum): string => {
  switch (color) {
    case ColorEnum.Green:
      return 'text-green-500';
    case ColorEnum.Yellow:
      return 'text-yellow-500';
    case ColorEnum.Orange:
      return 'text-orange-500';
    case ColorEnum.Red:
      return 'text-red-500';
    default:
      return '';
  }
};

export const DataBox = ({ title, value, description, color }: DataBoxProps) => {
  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
          <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
            {title}
          </h3>
        </div>
        <div className="p-6">
          <div className={`text-xl font-bold ${colorEnumToColorClass(color)}`}>
            {value}
          </div>
          <p className=" text-xs text-gray-500 dark:text-gray-400 ">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
