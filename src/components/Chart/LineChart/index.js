import useStyles from "./styles";
import React from "react";
import { Line } from "react-chartjs-2";

const data = {
    labels: ["15", "16", "17", "18", "19", "20", "21"],
    datasets: [
        {
            label: "Thời gian",
            data: [3, 2, 4, 5, 2, 3, 4],
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
        },
    ],
};

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
};

const LineChart = () => (
    <>
        <div className="header">
            <h1 className="title">Thời gian chơi hàng ngày</h1>
        </div>
        <Line data={data} options={options} />
    </>
);

export default LineChart;
