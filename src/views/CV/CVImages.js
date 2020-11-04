import React from "react";

import Carousel from "react-slick";

import classNames from "classnames";

// @material-ui/core components
import { emphasize, makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js"
import Small from "components/Typography/Small.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";



// import background from "assets/img/rca/SophieWorsnop_Plans.jpg";
import classroom from "assets/img/drmm/edu_01_dRMM.jpg";
import science from "assets/img/drmm/edu_02_dRMM.jpg";
import cafe from "assets/img/drmm/edu_03_dRMM.jpg";
import gym from "assets/img/drmm/edu_04_dRMM.jpg";
import diningRoom from "assets/img/drmm/edu_05_dRMM.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function ArchitecturePortfolio(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div>
      <Header
        // color="transparent"
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
    </div>
  )
};
