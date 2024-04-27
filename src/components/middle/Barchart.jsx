import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { randomId } from "@mantine/hooks";

const Barchart = () => {
    const chartSetting = {
        yAxis: [
            {
                label: "rainfall (mm)",
            },
        ],
        width: 1000,
        height: 300,

        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: "translate(-20px, 0)",
            },
        },
    };
    const dataset = [
        {
            sold: Math.random() * 100,
            wilaya: "alger",
        },
        {
            sold: Math.random() * 100,
            wilaya: "oran",
        },
        {
            sold: Math.random() * 100,
            wilaya: "khenchla",
        },
        {
            sold: Math.random() * 100,
            wilaya: "tbssa",
        },
        {
            sold: Math.random() * 100,
            wilaya: "batna",
        },
        {
            sold: 35,
            wilaya: "djijel",
        },
        {
            sold: 40,
            wilaya: "bejaia",
        },
        {
            sold: 45,
            wilaya: "tiziouzou",
        },
        {
            sold: 10,
            wilaya: "djelfa",
        },
        {
            sold: 20,
            wilaya: "adrar",
        },
        {
            sold: 10,
            wilaya: "temnrasset",
        },
        {
            sold: 20,
            wilaya: "bechar",
        },
    ];
    const valueFormatter = (value) => `${value}mm`;

    return (
        <>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "wilaya" }]}
                series={[{ dataKey: "sold", label: "sold", valueFormatter }]}
                {...chartSetting}
                colors={["#D10024"]}
            />
        </>
    );
};

export default Barchart;
