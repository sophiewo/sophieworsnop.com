import React from "react";

import classNames from "classnames";

import Carousel from "react-slick";

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
import Primary from "components/Typography/Primary.js";

import TitleProfessionalSectionErade from "./TitleProfessionalSectionErade.js";
import TitleProfessionalSectionTownHallAnnexe from "./TitleProfessionalSectionTownHallAnnexe.js";
import EradeCarousel from "./EradeCarousel";

import townHallAnnexe from "assets/img/drmm/170222_DidsburyCentre.jpg"

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function ProfessionalWork(props) {
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
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
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
                <TitleProfessionalSectionErade />
                <EradeCarousel />

                <TitleProfessionalSectionTownHallAnnexe />
                <div>
                  <div className={classes.section}>
                    <div className={classes.container}>
                      <GridContainer>
                        <GridItem xs={20} sm={20} md={20} className={classes.marginAuto}>
                          <Card carousel>
                            <Carousel {...settings}>
                              <div>
                                <img src={townHallAnnexe} alt="Second slide" className="slick-image" />
                                <div className="slick-caption">
                                  <Primary>
                                    <h4> Town Hall Annexe | © dRMM </h4>
                                  </Primary>
                                </div>
                              </div>
                            </Carousel>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </div>
                </div>
                
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div >
  )
};
