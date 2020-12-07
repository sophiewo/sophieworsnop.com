import React from "react";

import classNames from "classnames";

import Carousel from "react-slick";

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

import WorkProjectHeading from "../../components/WorkProjectHeading/WorkProjectHeading.js";
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
                <WorkProjectHeading
                  title="School for Deaf Children | Exeter, UK"
                  blurb="These images were created for an consultation at the school. We presented the design to teachers, students and parents and the images were pivitol in explaining the design and materiality of the proposal."
                  credit="Images created by Sophie while working at dRMM using: Rhino | Maxwell Render | Photoshop " />
                <EradeCarousel />


                <WorkProjectHeading
                  title="Town Hall Annexe | London, UK"
                  blurb="A renovation and extension of a decommissioned Town Hall building. The project proposes 40 residential units."
                  credit="Images worked on by Sophie while working at dRMM using: Rhino | Revit | Photoshop " />

                  <div>
                  <div className={classes.section}>
                    <div className={classes.container}>
                      <GridContainer>
                        <GridItem xs={20} sm={20} md={20} className={classes.marginAuto}>
                          <Card carousel>
                            <Carousel {...settings}>
                              <div>
                                <img src={townHallAnnexe} alt="townHallAnnex" className="slick-image" />
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
