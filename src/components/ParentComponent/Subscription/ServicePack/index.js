import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";

export default function ServicePack({ pack }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tooltip TransitionComponent={Zoom} title={pack.description}>
                <div
                    className={classes.container}
                    style={{
                        backgroundImage: `url(${pack.image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className={classes.inlineImage}>
                        <span className={classes.titleTeam}>{pack.title}</span>
                    </div>
                </div>
            </Tooltip>
        </div>
    );
}
