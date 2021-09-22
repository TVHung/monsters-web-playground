import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import avatar from "../../../assets/images/avt.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile() {
    const classes = useStyles();

    const [state, setState] = useState("");
    const [imageUpload, setImageUpload] = useState(null);

    const onEdit = () => {
        setOpen(true);
        setState("editInfor");
    };

    const onEditPassword = () => {
        setOpen(true);
        setState("editPassword");
    };

    const onChangeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageUpload(URL.createObjectURL(img));
            console.log(imageUpload);
        }
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onConfirm = () => {
        setOpen(false);
        if (state == "editInfor") {
            //update infor
        } else {
            //update password
        }
        setTimeout(() => {});
    };

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                paddingBottom: 10,
                            }}
                        >
                            <label htmlFor="file-input">
                                <img
                                    src={imageUpload || avatar}
                                    alt="avatar"
                                    className={classes.avatarProfile}
                                />
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                name="myImage"
                                style={{ display: "none" }}
                                onChange={(event) => onChangeImage(event)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={() => onEdit()}
                                className={classes.buttonEdit}
                                color="primary"
                            >
                                Chỉnh sửa thông tin
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => onEditPassword()}
                                className={classes.buttonEdit}
                                color="primary"
                            >
                                Thay đổi mật khẩu
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.inforContainer}>
                    <ShowInfor />
                </Grid>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        <b>
                            {state == "editInfor"
                                ? "Chỉnh sửa thông tin"
                                : "Thay đổi mật khẩu"}
                        </b>
                    </DialogTitle>
                    <DialogContent>
                        <form className={classes.form} noValidate>
                            {state == "editInfor" ? (
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
                                            id="email"
                                            label="Địa chỉ email"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            name="password"
                                            label="Mật khẩu"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            name="phone"
                                            label="Phone"
                                            type="text"
                                            id="phone"
                                        />
                                    </Grid>
                                </Grid>
                            ) : null}
                            {state == "editPassword" ? (
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            id="currentPassword"
                                            label="Mật khẩu hiện tại"
                                            name="currentPassword"
                                            autoComplete="currentPassword"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            id="newPassword"
                                            label="Mật khẩu mới"
                                            type="password"
                                            name="newPassword"
                                            autoComplete="newPassword"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            name="confirmPassword"
                                            label="Nhập lại mật khẩu mới"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="confirmPassword"
                                        />
                                    </Grid>
                                </Grid>
                            ) : null}
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
            </Grid>
        </div>
    );
}

function ShowInfor(props) {
    const classes = useStyles();
    return (
        <div>
            <ul style={{ listStyle: "none" }} className={classes.ul}>
                <li className={classes.li}>
                    <p>Họ và tên: Trương Văn Hùng</p>
                </li>
                <li className={classes.li}>
                    <p>Ngày sinh: 13/09/1999</p>
                </li>
                <li className={classes.li}>
                    <p>Số điện thoại: 0383621309</p>
                </li>
                <li className={classes.li}>
                    <p>Trường: Đại học Bách Khoa Hà Nôi (HUST)</p>
                </li>
                <li className={classes.li}>
                    <p>Email: hung.tv176776@sis.hust.edu.vn</p>
                </li>
            </ul>
        </div>
    );
}
