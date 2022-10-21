import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro: () => ({
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
    marginTop: "40px",
  }),
  card: () => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  }),

  cardMedia: () => ({
    margin: "auto",
    height: "100px",
    width: "100px",
  }),
  cardContent: () => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  }),
  cart: () => ({
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  }),
  button: () => ({
    width: "20px",
    marginBottom: "10px",
  }),
  list: () => ({
    padding: "5px",
    margin: "0px",
    color: "green",
  }),
}));

export default useStyles;
