import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js"
import Parallax from "components/Parallax/Parallax.js"

import styles from "assets/jss/material-kit-react/views/carouselStyle.js";

import DailyDoseLayout from "components/DailyDoseLayout/DailyDoseLayout";
import PortfolioHeader from "components/PortfolioHeader/PortfolioHeader";

const useStyles = makeStyles(styles);

export default function AcademicWork() {
  const classes = useStyles();

  return (
    <div>
      <Header fixed />
      <Parallax filter image={require("assets/img/rca/SophieWorsnop_DD2_bg.jpg")}>
        <PortfolioHeader
          portfolioKind="Academic Work"
          portfolioLocation="Daily Dose | Royal College of Art, 2015-2017"
          portfolioDescription="Psychiatry has followed the sine wave of development throughout modern history. 
                              With every new ‘breakthrough’ has come a significant low or lull in treatment progression. 
                              The changing tide towards true parity of esteem through recent policy speeches and campaigns by prominent 
                              individuals is a positive advancement and Daily Dose aims to seize on this new upward wave by proposing the
                              next leap forward in treatment for mental health."/>
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
