import Button from "@/components/Button";
import classNames from "@/hooks/classnames"
import { PieChart } from "react-minimal-pie-chart";

const energyColors = {
    "Coal": "#313132",
    "Nuclear": "#E2A5FF",
    "Natural Gas": "#7A7B7D",
    "Hydroelectric": "#99BBBA",
    "Wind": "#A2CEB9",
    "Solar": "#FFD49B",
};


export default function Footprint({ data }) {

    let rate = Math.round((data["annual_carbon_footprint"] - data["baseline_annual_carbon_footprint"]) / data["baseline_annual_carbon_footprint"] * 100);
    const graphData = [];
    for (let i = 0; i < data["estimated_generation_data"].length; i++) {
        let sector = data["estimated_generation_data"][i];
        graphData.push({
            title: sector["type"],
            value: sector["value"],
            color: energyColors[sector["type"]]
        });
    };
    graphData.sort((a, b) => b.value - a.value);
    console.log(data["estimated_generation_data"]);
    return (
        <div className="flex-1 flex flex-col items-stretch gap-[16px]">
            <h4>Your Footprint</h4>
            <div className="p-[20px] flex flex-wrap justify-between gap-[20px] items-start bg-white-100 border border-white-300 rounded-[12px]">
                <div>
                    <div className="flex items-baseline gap-[5px]">
                        <h3>{data["annual_carbon_footprint"].toLocaleString()}</h3>
                        <p className="caption">LBS/YEAR</p>
                    </div>
                    <p className={classNames("caption", rate < 0 ? "text-correct" : "text-error")}>{Math.abs(rate)}% {rate > 0 ? "higher" : "lower"} than baseline</p>
                </div>
                <Button>Find Fixes</Button>
            </div>
            <div className="p-[20px] flex items-center gap-[20px] flex-wrap bg-white-100 rounded-[12px] border border-white-300">
                <div className="flex-1 min-w-[150px]">
                    <PieChart data={graphData} animate lineWidth={50} paddingAngle={2} startAngle={180}/>
                </div>
                <div className="flex-1 flex flex-col justify-center items-stretch gap-[12px]">
                    <div className="flex justify-between">
                        <p className="caption text-white-400">Energy Breakdown</p>
                        <p className="caption text-white-400">%</p>
                    </div>
                    <hr className="border-white-300" />
                    {graphData.map(d => (
                        <div key={d.title} className="flex justify-between">
                            <p>{d.title}</p>
                            <p style={{ backgroundColor: d.color}} className="caption py-[4px] px-[10px] rounded-full text-white-100 flex items-center justify-center">{d.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}