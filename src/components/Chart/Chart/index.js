import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
    labels: ["15", "16", "17", "18", "19", "20", "21"],
    datasets: [
        {
            type: "line",
            label: "Thời gian chơi",
            borderColor: `rgb(255, 0, 0)`,
            borderWidth: 2,
            fill: false,
            data: [2, 4, 2, 3, 5, 2, 5],
        },

        {
            type: "bar",
            label: "Tiến độ",
            borderColor: `rgb(0, 255, 0)`,
            borderWidth: 2,
            fill: false,
            data: [4, 2, 1, 5, 3, 7, 6],
        },
    ],
});

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: false,
                },
            },
        ],
    },
    animation: {
        duration: 0,
    },
};

const Crazy = () => {
    const [data, setData] = useState(genData());

    useEffect(() => {
        const interval = setInterval(() => setData(genData()), 5000);

        return () => clearInterval(interval);
    }, []);

    console.log("chart");

    return (
        <>
            <div className="header">
                <h1 className="title">Biểu đồ tiến độ</h1>
            </div>
            <Bar data={data} options={options} />
        </>
    );
};

export default Crazy;
