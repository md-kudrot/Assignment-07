"use client";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useContext } from "react";
import { TimeLineContext } from "@/context/timeLineContext";

const Stats = () => {
    const { btnData } = useContext(TimeLineContext);

    const callArr = btnData.filter(item => item.logo === '📞');
    const textArr = btnData.filter(item => item.logo === '💬');
    const videoArr = btnData.filter(item => item.logo === '📹');


    const data = [
        { name: "Calls", value: callArr.length, fill: "#0088FE" },
        { name: "Texts", value: textArr.length, fill: "#FF8042" },
        { name: "Videos", value: videoArr.length, fill: "#00C49F" },
    ];
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="mt-8 text-2xl font-bold leading-tight sm:mt-10 sm:text-3xl lg:text-4xl">
                Friendship Analytics
            </h1>
            <div className="my-6 rounded-md border border-slate-300 p-4 shadow sm:my-8 sm:p-6 lg:p-10">
                <h2 className="mb-8 text-xl font-semibold sm:mb-10 sm:text-2xl lg:mb-16 lg:text-3xl">
                    By Interaction Type
                </h2>
                <div className="mx-auto h-80 w-full max-w-3xl sm:h-95 lg:h-105">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="65%"
                                outerRadius="90%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius={8}
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend verticalAlign="bottom" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;