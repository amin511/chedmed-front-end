import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
    { value: 5, label: "Homme", color: "black" },
    { value: 10, label: "Femme", color: "#5E5CE6" },
];

const size = {
    width: 400,
    height: 250,
};

const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
}));

// eslint-disable-next-line react/prop-types
function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function Piechart() {
    return (
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
            <PieCenterLabel>Center label</PieCenterLabel>
        </PieChart>
    );
}
