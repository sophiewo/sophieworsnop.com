import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function AcademicHeader() {
  const classes = useStyles();

return (
<div className={classes.container}>
  <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
        <h1 className={classes.title}>Architectural Portfolio </h1>
        <div className={classes.typo}>
          <h2>
            Academic Work
              <br />
            University of Bath, 2009-2013
            Royal College of Art, 2015-2017
          </h2>
          <h3>
            A small example of some drawings from my thesis at the RCA.
            Check back for more work coming to the site soon
           </h3>
        </div>
    </GridItem>
  </GridContainer>
</div>
);
}