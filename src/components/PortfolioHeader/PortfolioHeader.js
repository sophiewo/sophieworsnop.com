import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/archPage.js";

const useStyles = makeStyles(styles);

export default function PortfolioHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <h1 className={classes.title}>Architectural Portfolio </h1>
          <h2 className={classes.subtitle}> {props.portfolioKind}</h2>
          <h3 className={classes.locationHeading}> {props.portfolioLocation}</h3>
          <h3 className={classes.info}> {props.portfolioDescription}</h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}