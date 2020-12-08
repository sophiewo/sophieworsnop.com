import React from "react";

import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js"
import Small from "components/Typography/Small.js";
import Primary from "components/Typography/Primary.js";

import sitePlan from "assets/img/rca/SophieWorsnop_Siteplan.jpg";
import explodedAxo from "assets/img/rca/SophieWorsnop_ExplodedAxo.jpg";
import section from "assets/img/rca/SophieWorsnop_Section.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function AcademicWork(props) {
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
        color="white"
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
      <Parallax filter image={require("assets/img/rca/SophieWorsnop_Plan_bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Primary>
                <h1 className={classes.title}>Architectural Portfolio </h1>

                <div className={classes.typo}>
                  <h2>
                    Academic Work
                <br />
                    <Small>University of Bath, 2009-2013</Small>
                    <Small>Royal College of Art, 2015-2017</Small>
                  </h2>
                  <h3>
                    A small example of some drawings from my thesis at the RCA.
                    Check back for more work coming to the site soon
                  </h3>
                </div>
              </Primary>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img src={explodedAxo} alt="ExplodedAxo" className="slick-image" />

                    <img src={sitePlan} alt="Site Plan" className="slick-image" />

                    <img src={section} alt="Section" className="slick-image" />

                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
