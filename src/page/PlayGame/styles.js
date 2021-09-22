import { makeStyles } from "@material-ui/core/styles";
import fullScreenIcon from "../../assets/images/fullscreen.png";

export default makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
        minHeight: "100vh",
    },

    playGameArea: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingLeft: 20,
        paddingRight: 20,
    },

    gameContainer: {
        width: "100%",
        marginBottom: 30,
        paddingBottom: "56.25%",
        height: 0,
    },

    iframeContainer: {
        paddingBottom: "56.25%",
        height: 0,
        position: "relative",
    },

    iframe: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        position: "absolute",
        overflowY: "hidden",
    },

    nofi: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        position: "absolute",
        overflowY: "hidden",
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    fullBtn: {
        zIndex: 1,
        float: "right",
        position: "relative",
        transition: "all .1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
        marginTop: -30,
        backgroundColor: "rgba(0, 0, 0, 0)",
    },

    gameInfor: {
        paddingTop: 10,
        paddingBottom: 20,
    },

    otherGame: {
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
        maxHeight: "100vh",
    },

    social: {
        margin: 10,
    },

    socialMediaButton: {
        marginRight: 10,
    },
}));
