import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    avatar: {
        paddingBottom: 30,
    },

    avatarProfile: {
        borderRadius: "50%",
        width: 120,
        height: 120,
        transition: "all .1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        },
    },

    uploadImage: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: 30,
        height: 30,
    },

    iconCamera: {
        position: "relative",
        "&:hover": {
            cursor: "pointer",
        },
    },

    form: {
        paddingTop: 20,
        paddingBottom: 20,
    },

    inforContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        // display: "flex",
    },

    ul: {
        margin: 20,
        padding: 10,
        // "@media(minWidth: 780px)": {
        //     margin: 20,
        //     padding: 10,
        // },
        // width: "100%",
    },

    li: {
        border: "1px solid grey",
        borderRadius: 10,
        paddingLeft: 20,
        marginBottom: 5,
    },

    buttonEdit: {
        marginLeft: 10,
        marginRight: 10,
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
}));
