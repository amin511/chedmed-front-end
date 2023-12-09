import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

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
            retour: 59,
            wilaya: "alger",
        },
        {
            retour: 50,
            wilaya: "oran",
        },
        {
            retour: 47,
            wilaya: "khenchla",
        },
        {
            retour: 54,
            wilaya: "tbssa",
        },
        {
            retour: 57,
            wilaya: "batna",
        },
        {
            retour: 60,
            wilaya: "djijel",
        },
        {
            retour: 59,
            wilaya: "bejaia",
        },
        {
            retour: 65,
            wilaya: "tiziouzou",
        },
        {
            retour: 51,
            wilaya: "djelfa",
        },
        {
            retour: 60,
            wilaya: "adrar",
        },
        {
            retour: 67,
            wilaya: "temnrasset",
        },
        {
            retour: 61,
            wilaya: "bechar",
        },
    ];
    const valueFormatter = (value) => `${value}mm`;

    return (
        <>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "wilaya" }]}
                series={[{ dataKey: "retour", label: "retour", valueFormatter }]}
                {...chartSetting}
                colors={["#5E5CE6"]}
            />
        </>
    );
};

export default Barchart;
