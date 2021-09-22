import { Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { TramRounded } from "@material-ui/icons";
import Rating from "../Rating";
import RateAvg from "../RateAvg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RatingForm({ rating }) {
    const classes = useStyles();

    const [rate, setRate] = useState("");

    const handleOnChange = (e) => {
        setRate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Bạn đánh giá sản phẩm như nào?"}
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12} className={classes.rateContainer}>
                            <Rating choice={true} />
                        </Grid>
                        <Grid item xs={12} className={classes.commentContainer}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="rate"
                                type="text"
                                placeholder="Nhập nhận xét của bạn"
                                id="rate"
                                onChange={(e) => handleOnChange(e)}
                                className={classes.inputRate}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        className={classes.dialogaction}
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        className={classes.dialogaction}
                    >
                        Gửi
                    </Button>
                </DialogActions>
            </Dialog>
            <form className={classes.form} noValidate>
                <Grid container className={classes.formContainer}>
                    <Grid item xs={8}>
                        <RateAvg rating={rating} />
                    </Grid>
                    <Grid item xs={4} className={classes.submitContainer}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            // onClick={(e) => handleSubmit(e)}
                            onClick={(e) => handleClickOpen(e)}
                        >
                            Đánh giá
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
