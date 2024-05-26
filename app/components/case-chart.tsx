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
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legendOffset: 48,
        legendPosition: "middle",
        legend: "Número de Casos",
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
          itemTextColor: "#000",
        },
      ]}
    />
  );
}
