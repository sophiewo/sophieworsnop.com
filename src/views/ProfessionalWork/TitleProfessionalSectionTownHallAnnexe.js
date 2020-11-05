import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function TitleProfessionalSection() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <h2>Town Hall Annexe | London, UK </h2>
            <h4>
              A renovation and extension of a decommissioned Town Hall building. The project proposes 40 residential Units </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
