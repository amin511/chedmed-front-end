import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
    return (
        <LineChart
            xAxis={[{ data: [10, 15, 17, 18, 20, 25, 30, 35, 40, 45] }]}
            series={[
                {
                    data: [2, 35, 55, 70, 80, 75, 60, 40, 30, 20],
                },
            ]}
            width={500}
            height={300}
            colors={["#D10024"]}
        />
    );
}