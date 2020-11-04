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
          <h2>School for Deaf Children | Exeter, UK </h2>
            <h4>
              These images were created for an consultation at the school. We presented the design to teachers, students and parents and the images were pivitol in explaining the design and materiality of the proposal.
            </h4>

           Images created by Sophie while working at dRMM using: Rhino | Maxwell Render | Photoshop 
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
