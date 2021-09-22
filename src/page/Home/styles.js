import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/images/bg.png";
import backgroundLeft from "../../assets/images/bgleft.png";
import backgroundRight from "../../assets/images/bgright.png";

export default makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        // backgroundImage: `url(${background})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        // minHeight: "100%",
        minHeight: "100vh",
        alignItems: "top",
        justifyContent: "center",
        display: "flex",
        paddingTop: 0,
    },

    left: {
        backgroundImage: `url(${backgroundLeft})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },

    right: {
        backgroundImage: `url(${backgroundRight})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },

    container: {
        maxWidth: "100%",
    },

    listgame: {
        zIndex: 1,
        padding: 20,
    },
}));
