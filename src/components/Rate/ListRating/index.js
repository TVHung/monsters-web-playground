import { Grid } from "@material-ui/core";
import React from "react";
import ItemRate from "./ItemRate";

export default function ListRating({ listRating }) {
    return (
        <div style={{ paddingTop: 10 }}>
            <Grid container spacing={3} alignItems="stretch">
                {listRating.map((rate) => (
                    <Grid key={rate.id} item xs={12}>
                        <ItemRate rate={rate} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
