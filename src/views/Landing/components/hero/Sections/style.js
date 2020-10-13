import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    backgroundTop: {
        marginTop: "200px",// 16:9
        "@media (max-width: 500px)": {
            marginTop: "10px",

        },
    },
    secondRow: {
        marginTop: "100px",// 16:9
        "@media (max-width: 500px)": {
            marginTop: "10px",
        },
    },
    options: {
        fontWeight: "700",
        "@media (max-width: 500px)": {
            marginBottom: "40px",

        },
    },
    contact: {
        marginTop: "100px",
        marginBottom: "100px",
        padding: "100px",// 16:9
        "@media (max-width: 500px)": {
            marginTop: "10px",
            padding: "5px",
            marginBottom: "100px",

        },
    }
}));
