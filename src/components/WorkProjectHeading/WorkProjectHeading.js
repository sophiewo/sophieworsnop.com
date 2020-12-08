import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

export default function WorkProjectHeading(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <h2> {props.title} </h2>
            <h4>
            {props.blurb} 
            </h4>
           {props.credit}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
