import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

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
                    <h1>Không tồn tại</h1>
                </Grid>
                <Grid item xs={12} className={classes.center}>
                    <Link to="/">
                        <p>Trở về Home</p>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}
