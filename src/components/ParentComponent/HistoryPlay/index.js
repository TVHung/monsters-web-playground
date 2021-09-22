import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import ListGame from "../../ListGame";

export default function HistoryPlay({ games }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Các game vừa chơi</h1>
            <ListGame games={games} />
        </div>
    );
}
