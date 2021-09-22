import { Grid } from "@material-ui/core";
import React from "react";
import Rating from "../../Rating";
import useStyles from "./styles";

export default function Post({ rate }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Rating numberVoted={rate.numberVoted} size={15} />
                    <p style={{ padding: 0, margin: 0 }}>
                        <b>{rate.username}</b>
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <span>
                        <p style={{ padding: 0, margin: 0 }}>{rate.title}</p>
                    </span>
                </Grid>
            </Grid>
            <hr style={{ color: "grey", opacity: 0.2 }} />
        </div>
    );
}
