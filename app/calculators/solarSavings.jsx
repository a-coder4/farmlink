import LineGraph from "@/components/LineGraph";

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export default function SolarSavings({ data }) {
    let datapoints = [];
    for(let i = 0; i < 12; i++) {
        datapoints.push([months[i], data["cost_savings_monthly"][i]]);
    }
    return (
        <div className="flex-1 flex flex-col items-stretch gap-[16px]">
            <div className="flex flex-wrap gap-[16px] items-stretch">
                <div className="flex flex-1 flex-col p-[20px] rounded-[12px] items-start gap-[12px] bg-yellow-500">
                    <h6 className="text-yellow-700">Up-Front Cost</h6>
                    <h3 className="text-yellow-800">${data["upfront_cost"].toLocaleString()}</h3>
                </div>
                <div className="flex flex-1 flex-col p-[20px] rounded-[12px] items-start gap-[12px] bg-green-600">
                    <h6 className="text-green-700">Pay-back Period</h6>
                    <div className="flex items-baseline gap-[5px]">
                        <h3 className="text-green-800">{data["payback_period"].toLocaleString()}</h3>
                        <h6 className="caption">Years</h6>
                    </div>
                </div>
            </div>
            <LineGraph.YearGraph title="Estimated Solar Savings" datapoints={datapoints} color="#976EAA" prefix="$"/>
        </div>

    );
}