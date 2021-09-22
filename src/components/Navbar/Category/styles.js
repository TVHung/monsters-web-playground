import { makeStyles } from "@material-ui/core/styles";
import { detectDevice_isMobile } from "../../../utils/DeviceDetect";

const device = detectDevice_isMobile();

export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: device == false ? 120 : 60,
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 2,
        // boxShadow: "0 10px 5px -5px rgba(0, 0, 0, .3)",
    },

    gridIcon: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: device == false ? 120 : 60,
    },

    iconTextContainer: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: device == false ? 5 : 2,
        transition: "all .1s ease-in-out",

        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
    },

    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    iconCategory: {
        // width: 60,
        height: device == false ? 60 : 30,
        paddingBottom: device == false ? 10 : 5,
        paddingTop: device == false ? 10 : 5,
        // backgroundColor: "green",
    },

    titleIcon: {
        paddingBottom: device == false ? 10 : 5,
        margin: 0,
        width: "100%",
        fontSize: device == false ? 15 : 10,
        height: device == false ? 15 : 10,
        color: "red",
        fontFamily: "Source Sans Pro",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));
