import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/archPage.js";

const useStyles = makeStyles(styles);

export default function AcademicHeader() {
  const classes = useStyles();

return (
<div className={classes.container}>
  <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
        <h1 className={classes.title}>Architectural Portfolio </h1>
          <h2 className={classes.subtitle}>Academic Work </h2>

          <h3 className={classes.locationHeading}>
            Daily Dose | Royal College of Art, 2015-2017 </h3>

          <h3 className={classes.info}>
          Psychiatry has followed the sine wave of development throughout modern 
          history. With every new ‘breakthrough’ has come a significant low or lull in treatment progression. 
          The changing tide towards true parity of esteem through recent policy speeches and campaigns by prominent 
          individuals is a positive advancement and Daily Dose aims to seize on this new upward wave by proposing the
          next leap forward in treatment for mental health.  
           </h3>
    </GridItem>
  </GridContainer>
</div>
);
}