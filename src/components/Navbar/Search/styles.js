import { makeStyles } from "@material-ui/core/styles";
import { detectDevice_isMobile } from "../../../utils/DeviceDetect";

const device = detectDevice_isMobile();

export default makeStyles((theme) => ({
    container: {
        width: "100%",
    },

    boxSearch: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: device == false ? 60 : 30,
        marginLeft: "10%",
        marginRight: "10%",
        transition: "all .2s ease-in-out",
        "&:hover": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
            transform: "scale(1.05)",
        },
        "&:focus-within": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
            transform: "scale(1.05)",
        },
    },

    input: {
        width: "100%",
        height: device == false ? 60 : 30,
        backgroundColor: "#f4f4f4",
        borderTopLeftRadius: device == false ? 60 : 30,
        borderBottomLeftRadius: device == false ? 60 : 30,
        paddingLeft: device == false ? 40 : 20,
        fontSize: device == false ? 25 : 10,
        border: "none",
        outline: "none",
    },

    button: {
        width: device == false ? 80 : 40,
        height: device == false ? 62 : 32,
        borderTopRightRadius: device == false ? 60 : 30,
        borderBottomRightRadius: device == false ? 60 : 30,
        // backgroundColor: "#2e5fd8",
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        border: "none",
        outline: "none",
        cursor: "pointer",
    },

    iconSearch: {
        color: "white",
        fontSize: device == false ? 30 : 20,
        transition: "all .1s ease-in-out",
        "&:hover": {
            transform: device == false ? "scale(1.2)" : "scale(1.1)",
        },
    },
}));
