import { makeStyles } from "@material-ui/core/styles";

const rand = () => Math.floor(Math.random() * 255);

export default makeStyles((theme) => ({
    // root: {
    //     width: "100%",
    //     backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //
    // },

    root: {
        display: "block",
        overflow: "hidden",
        borderRadius: 5,
    },

    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .4s ease-out",
        maxWidth: "100%",
        zIndex: 1,
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
    },

    inlineImage: {
        width: "100%",
        height: 300,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    titleTeam: {
        fontSize: 20,
        padding: 10,
        color: "black",
        backgroundColor: "white",
        opacity: 0.6,
    },
}));
