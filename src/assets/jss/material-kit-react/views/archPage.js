import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const archStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    color: "white",
    display: "inline-block",
    position: "relative",
    marginTop: "100px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    display: "inline-block",
    position: "relative",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },

  locationHeading: {
    color: "white",
    fontWeight: "bold",
    position: "relative",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },

  info: {
    color: "white",
    fontSize: "95%",
    textAlign: "justify", 
    marginTop: "5px",
    minHeight: "32px",
    textDecoration: "none"
  },

  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default archStyle;
