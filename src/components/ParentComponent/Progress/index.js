import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import LineChart from "../../Chart/LineChart";
import Chart from "../../Chart/Chart";

export default function Progress() {
    const classes = useStyles();

    console.log("Trang bieu do");

    return (
        <div className={classes.root}>
            {/* <div>
                <LineChart />
            </div> */}
            <div>
                <Chart />
            </div>
        </div>
    );
}
