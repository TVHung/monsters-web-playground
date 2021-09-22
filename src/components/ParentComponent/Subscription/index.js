import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ServicePack from "./ServicePack";
import { Grid } from "@material-ui/core";

export default function Subscription({ packs }) {
    return (
        <div style={{ paddingTop: 10 }}>
            <Grid container spacing={3} alignItems="stretch">
                {packs.map((pack) => (
                    <Grid key={pack.id} item xs={6} md={4}>
                        <ServicePack pack={pack} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
