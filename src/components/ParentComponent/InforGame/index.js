import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function InforGame() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onConfirm = () => {
        setOpen(false);
    };

    const onEdit = () => {
        setOpen(true);
    };

    return (
        <div className={classes.root}>
            <div>
                <h1>Thông tin trong game</h1>
                <ul style={{ listStyle: "none" }} className={classes.ul}>
                    <li className={classes.li}>
                        <p>Username: thien_than_ao_trang</p>
                    </li>
                    <li className={classes.li}>
                        <p>Id: kevotinh</p>
                    </li>
                    <li className={classes.li}>
                        <p>Vàng: 13091999</p>
                    </li>
                    <li className={classes.li}>
                        <p>Kim cương: 13091999</p>
                    </li>
                </ul>
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={() => onEdit()}
                    className={classes.buttonEdit}
                    color="primary"
                >
                    Chỉnh sửa thông tin
                </Button>
            </div>
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Thay đổi thông tin
                    </DialogTitle>
                    <DialogContent>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"
                                        fullWidth
                                        id="username"
                                        label="Tên người dùng"
                                        name="username"
                                        autoComplete="username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"
                                        fullWidth
                                        id="id"
                                        label="ID"
                                        name="id"
                                        autoComplete="id"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} color="secondary">
                            Hủy
                        </Button>
                        <Button onClick={() => onConfirm()} color="primary">
                            Đồng ý
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
