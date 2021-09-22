import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import inProgress from "../../assets/images/in_progress.jpg";

export default function Error({ setHome }) {
    const classes = useStyles();

    useEffect(() => {
        setHome(false);
        document.title = "Lỗi";
    }, []);

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.center}>
                    <h1>Chức năng đang được xây dựng...</h1>
                </Grid>
                <Grid item xs={12} className={classes.center}>
                    <img alt="inprogress" src={inProgress} />
                </Grid>
                <Grid item xs={12} className={classes.center}>
                    <Link to="/">
                        <h2>Trở về Home</h2>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}
