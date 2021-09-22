import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { changeCateGory } from "../../../redux/actions/gameActions";
import { useHistory } from "react-router-dom";
import { removeVietnameseTones } from "../../../utils/ConvertVie";
import tonghop from "../../../assets/images/Icon/tonghop2.gif";
import mamnon from "../../../assets/images/Icon/mamnon2.gif";
import vandong from "../../../assets/images/Icon/suckhoe2.gif";
import tieuhoc from "../../../assets/images/Icon/tieuhoc2.gif";
import tonghopDen from "../../../assets/images/Icon/tonghopDen.png";
import mamnonDen from "../../../assets/images/Icon/mamnonDen.png";
import vandongDen from "../../../assets/images/Icon/suckhoeDen.png";
import tieuhocDen from "../../../assets/images/Icon/tieuhocDen.png";

export default function Category({ isScroll, isHome }) {
    const classes = useStyles();
    const [onTop, setonTop] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setonTop(isScroll.onTop);
    }, [onTop, isScroll]);

    const onClickCategory = (index) => {
        dispatch(changeCateGory(index));
        let type = removeVietnameseTones(index);
        history.push({
            pathname: "/",
            search: "?type=" + type,
        });
    };

    const category =
        useSelector((state) => state.game.gameCategory) || "Tổng hợp";

    useEffect(() => {}, [category]);

    return (
        <div
            className={classes.container}
            style={{
                boxShadow: onTop ? "0 10px 5px -5px rgba(0, 0, 0, .3)" : "",
                position: !isHome ? "fixed" : "",
                top: !isHome ? 0 : "",
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={2} sm={4}></Grid>
                <Grid item xs={8} sm={4}>
                    <Grid container direction="row">
                        <Grid item xs={3} className={classes.gridIcon}>
                            <Grid
                                container
                                className={classes.iconTextContainer}
                                style={{
                                    backgroundColor:
                                        category == "Tổng hợp"
                                            ? "#f4f4f4"
                                            : null,
                                }}
                                onClick={() => onClickCategory("Tổng hợp")}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.iconContainer}
                                >
                                    {category == "Tổng hợp" ? (
                                        <img
                                            src={tonghop}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    ) : (
                                        <img
                                            src={tonghopDen}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    )}
                                </Grid>
                                {!isScroll.onTop && isHome ? (
                                    <Grid item xs={12}>
                                        <h3 className={classes.titleIcon}>
                                            {category == "Tổng hợp"
                                                ? "TỔNG HỢP"
                                                : null}
                                        </h3>
                                    </Grid>
                                ) : null}
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={classes.gridIcon}>
                            <Grid
                                container
                                className={classes.iconTextContainer}
                                style={{
                                    backgroundColor:
                                        category == "Mầm non"
                                            ? "#f4f4f4"
                                            : null,
                                }}
                                onClick={() => onClickCategory("Mầm non")}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.iconContainer}
                                >
                                    {category == "Mầm non" ? (
                                        <img
                                            src={mamnon}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    ) : (
                                        <img
                                            src={mamnonDen}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    )}
                                </Grid>
                                {!isScroll.onTop && isHome ? (
                                    <Grid item xs={12}>
                                        <h3 className={classes.titleIcon}>
                                            {category == "Mầm non"
                                                ? "MẦM NON"
                                                : null}
                                        </h3>
                                    </Grid>
                                ) : null}
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={classes.gridIcon}>
                            <Grid
                                container
                                className={classes.iconTextContainer}
                                style={{
                                    backgroundColor:
                                        category == "Tiểu học"
                                            ? "#f4f4f4"
                                            : null,
                                }}
                                onClick={() => onClickCategory("Tiểu học")}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.iconContainer}
                                >
                                    {category == "Tiểu học" ? (
                                        <img
                                            src={tieuhoc}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    ) : (
                                        <img
                                            src={tieuhocDen}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    )}
                                </Grid>
                                {!isScroll.onTop && isHome ? (
                                    <Grid item xs={12}>
                                        <h3 className={classes.titleIcon}>
                                            {category == "Tiểu học"
                                                ? "TIỂU HỌC"
                                                : null}
                                        </h3>
                                    </Grid>
                                ) : null}
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={classes.gridIcon}>
                            <Grid
                                container
                                className={classes.iconTextContainer}
                                style={{
                                    backgroundColor:
                                        category == "Vận động"
                                            ? "#f4f4f4"
                                            : null,
                                }}
                                onClick={() => onClickCategory("Vận động")}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.iconContainer}
                                >
                                    {category == "Vận động" ? (
                                        <img
                                            src={vandong}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    ) : (
                                        <img
                                            src={vandongDen}
                                            alt="learn"
                                            className={classes.iconCategory}
                                        />
                                    )}
                                </Grid>
                                {!isScroll.onTop && isHome ? (
                                    <Grid item xs={12}>
                                        <h3 className={classes.titleIcon}>
                                            {category == "Vận động"
                                                ? "VẬN ĐỘNG"
                                                : null}
                                        </h3>
                                    </Grid>
                                ) : null}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} sm={4}></Grid>
            </Grid>
        </div>
    );
}
