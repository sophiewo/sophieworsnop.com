import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Header fixed />
      <Parallax image={require("assets/img/landpage-sophieknits_sm.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <h1 className={classes.title}>Hi, I'm Sophie. </h1>
              <h2>
                An architectural designer turned full-stack developer. I have a passion for sustainable design, whether it be a building or a piece of tech.
              </h2>
              <br />
              <h3> See behind the scenes of this React Website or say Hi </h3>
              <Button
                color="primary" round
                size="lg"
                href="https://www.github.com/sophiewo"
                target="_blank"
                rel="noopener noreferrer">
                <i className={classes.socialIcons + " fab fa-github"} />
                 github
              </Button>

              <Button
                color="primary" round
                size="lg"
                href="mailto:sophie.g.worsnop@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <i className={classes.socialIcons + " fab fa-mail"} />
                 Email me
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
