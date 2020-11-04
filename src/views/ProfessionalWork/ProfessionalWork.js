import React from "react";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js"
import Small from "components/Typography/Small.js";
import Info from "components/Typography/Info.js";

import EradeCarousel from "../LandingPage/Sections/EradeCarousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function ProfessionalWork(props) {
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="sophieworsnop.com"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax filter image={require("assets/img/drmm/PosterOnWall01_cKKoren_dRMM.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Info>
                <h1 className={classes.title}>Architectural Portfolio </h1>

                <div className={classes.typo}>
                  <h2>
                    Professional Work
                <br />
                    <Small> dRMM Architects, 2013-2019</Small>
                  </h2>
                </div>
              </Info>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.section}>
    
        <GridContainer justify="center">
          <GridItem cs={0} sm={15} md={10}>
              <Card>
            <h2 className={classes.title}> School for Deaf Children | Exeter, UK </h2>
            <EradeCarousel />
              </Card>
          </GridItem>
        </GridContainer>

        </div>
      <Footer />
    </div>
    </div>

  )
};
