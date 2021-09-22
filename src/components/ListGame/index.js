import { Grid } from "@material-ui/core";
import React from "react";
import ItemGame from "./ItemGame";

export default function ListGame({ games }) {
    return (
        <div style={{ paddingTop: 10 }}>
            <Grid container spacing={3} alignItems="stretch">
                {games.map((game) => (
                    <Grid key={game._id} item xs={6} md={4}>
                        <ItemGame game={game} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
