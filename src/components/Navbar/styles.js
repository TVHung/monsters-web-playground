import { makeStyles } from "@material-ui/core/styles";
import { detectDevice_isMobile } from "../../utils/DeviceDetect";

const device = detectDevice_isMobile();

export default makeStyles((theme) => ({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 150,
        zIndex: 3,
    },

    avatar: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 3,
        float: "left",
        height: device == false ? 120 : 60,
        width: "20%",
    },

    backAvatar: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    iconBack: {
        width: device == false ? 40 : 20,
        height: device == false ? 40 : 20,
        transition: "all .1s ease-in-out",
        "&:hover": {
            transform: "scale(1.2)",
            cursor: "pointer",
        },
    },

    avatarProfile: {
        borderRadius: "50%",
        width: device == false ? 60 : 30,
        height: device == false ? 60 : 30,
        transition: "all .1s ease-in-out",
        "&:hover": {
            width: device == false ? 65 : 32,
            height: device == false ? 65 : 32,
            cursor: "pointer",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        },
    },

    search: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        float: "left",
        height: device == false ? 120 : 60,
        width: "70%",
        zIndex: 1,
        // position: !isHome ? "sticky" : null,
        // top: !isHome ? 0 : null,
        position: "sticky",
        top: 0,
    },
    lock: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 3,
        height: device == false ? 120 : 60,
        width: "20%",
    },
    lockIcon: {
        width: device == false ? 40 : 25,
        transition: "all .1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.2)",
        },
    },

    buttonSearch: {
        width: device == false ? 60 : 30,
        height: device == false ? 60 : 30,
        borderRadius: "50%",
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        border: "none",
        outline: "none",
        transition: "all .1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
    },

    iconSearch: {
        color: "white",
        fontSize: device == false ? 30 : 15,
    },
}));
