import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js"
import Small from "components/Typography/Small.js";
import Primary from "components/Typography/Primary.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import DailyDoseLayout from "components/DailyDoseLayout/DailyDoseLayout";

const useStyles = makeStyles(styles);

export default function AcademicWork(props) {
  const classes = useStyles();
  // const { ...rest } = props;

  return (
    <div>
      <Header fixed />
      <Parallax filter image={require("assets/img/rca/SophieWorsnop_Plan_bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Primary>
                <h1 className={classes.title}>Architectural Portfolio </h1>
                <div className={classes.typo}>
                  <h2>
                    Academic Work
                      <br/>
                    <Small>University of Bath, 2009-2013</Small>
                    <Small>Royal College of Art, 2015-2017</Small>
                  </h2>
                  <h3>
                    A small example of some drawings from my thesis at the RCA.
                    Check back for more work coming to the site soon
                  </h3>
                </div>
              </Primary>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} spacing={3} >
                <DailyDoseLayout />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
