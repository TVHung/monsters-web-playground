import React from "react";
import Rating from "../Rating";
import useStyles from "./styles";

export default function RateAvg({ rating }) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.score}>
                <span className={classes.avg}>{rating}</span>
                <span className={classes.sum}>/5</span>
            </div>
            <div className={classes.rateAvg}>
                <Rating numberVoted={rating} size={30} choice={false} />
            </div>
            <div className={classes.count}>
                <span className={classes.textCount}>100 đánh giá</span>
            </div>
        </div>
    );
}
