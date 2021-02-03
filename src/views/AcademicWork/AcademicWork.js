import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js"
import Parallax from "components/Parallax/Parallax.js"

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

import DailyDoseLayout from "components/DailyDoseLayout/DailyDoseLayout";
import AcademicHeader from "components/AcademicHeader/AcademicHeader";

const useStyles = makeStyles(styles);

export default function AcademicWork() {
  const classes = useStyles();

  return (
    <div>
      <Header fixed />
      <Parallax filter image={require("assets/img/rca/SophieWorsnop_Plan_bg.jpg")}>
        <AcademicHeader/>
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
