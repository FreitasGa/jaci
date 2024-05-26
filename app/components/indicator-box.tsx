type IndicatorBoxProps = {
  title: string;
  description: string;
  value: number;
};

export default function IndicatorBox({
  title,
  description,
  value,
}: IndicatorBoxProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
      <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
        <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <div className={`text-xl font-bold `}>{value}</div>
        <p className=" text-xs text-gray-500 dark:text-gray-400 ">
          {description}
        </p>
      </div>
    </div>
  );
}
