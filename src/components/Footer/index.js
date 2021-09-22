import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar({ isScroll, setAuth }) {
    const classes = useStyles();
    const device = useSelector((state) => state.user.deviceIsMobile);

    return (
        <Grid container className={classes.container} direction="row">
            <Grid
                item
                className={classes.line}
                xs={12}
                style={
                    {
                        // height: device == false ? 160 : 80,
                        // backgroundImage: `url("https://www.gstatic.com/ytkids/web/watch_it_again/bg_profile_signedout_bottom_3.png")`,
                    }
                }
            ></Grid>
        </Grid>
    );
}
