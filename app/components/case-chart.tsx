import { ResponsiveBar } from "@nivo/bar";
import { DiseaseData } from "../types";

type CaseChartProps = {
  diseaseData: DiseaseData;
};

export default function CaseChart({ diseaseData }: CaseChartProps) {
  return (
    <ResponsiveBar
      data={[
        {
          disease: "Zika",
          casos: diseaseData.totalCases.zika,
        },
        {
          disease: "Dengue",
          casos: diseaseData.totalCases.dengue,
        },
        {
          disease: "Chikungunya",
          casos: diseaseData.totalCases.chikungunya,
        },
      ]}
      valueScale={{ type: "linear" }}
      keys={["casos"]}
      indexBy="disease"
      layout="horizontal"
      colors="#62a8ac"
      margin={{ top: 0, right: 120, bottom: 60, left: 120 }}
      labelTextColor="#ffebeb"
      axisBottom={{
        legendOffset: 48,
        legendPosition: "middle",
        legend: "Número de Casos",
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemWidth: 100,
          itemHeight: 20,
          symbolSize: 36,
        },
      ]}
    />
  );
}
