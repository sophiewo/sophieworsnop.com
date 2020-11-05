import React from "react";

import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import Primary from "components/Typography/Primary.js";



// import background from "assets/img/rca/SophieWorsnop_Plans.jpg";
import sitePlan from "assets/img/rca/SophieWorsnop_Siteplan.jpg";
import explodedAxo from "assets/img/rca/SophieWorsnop_ExplodedAxo.jpg";
// import image3 from "assets/img/rca/SophieWorsnop_03.jpg";
// import image5 from "assets/img/rca/SophieWorsnop_03.jpg";
// import image6 from "assets/img/rca/SophieWorsnop_03.jpg";

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
              </div>
           
              <div className={classes.typo}>
                <h2>
                  Professional Work
                <br />
                  <Small> dRMM Architects, 2013-2019 | Freelance, 2019-2020</Small>
                </h2>
              </div>
                </Primary>
            
              {/* <h2>
                An architectural designer turned full-stack developer. I have a passion for sustainable design, whether it be a building or a piece of tech.
              </h2> */}
              {/* <Button
                color="primary" round
                size="lg"
                href="https://www.github.com/sophiewo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={classes.socialIcons + " fab fa-github"} />
                 github
              </Button> */}
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
                    <img src={explodedAxo} alt="Second slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                      Exploded Axo
                    </h4>
                    </div>
                  <img src={sitePlan} alt="Site Plan" className="slick-image" />
                  <div className="slick-caption">
                  </div>
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
