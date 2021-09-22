import { Grid } from "@material-ui/core";
import React from "react";
import ItemGame from "../ListGame/ItemGame";

export default function ListGameSuggest({ games }) {
    return (
        <div style={{ padding: 30 }}>
            <Grid container spacing={3}>
                {games.map((game) => (
                    <Grid key={game._id} item xs={6} md={12}>
                        <ItemGame game={game} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
