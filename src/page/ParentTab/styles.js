import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        minHeight: "100vh",
    },

    tabContainer: {},

    tabs: {
        borderRight: `3px solid ${theme.palette.divider}`,
        width: "100%",
    },

    tab: {
        width: 300,
    },

    itemTab: {
        verticalAlign: "middle",
        alignItems: "seft-start",
        justifyContent: "flex-start",
        zIndex: 2,
    },

    tabPanel: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
}));
