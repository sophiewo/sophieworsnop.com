import React from "react";

import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Primary from "components/Typography/Primary.js";

import classroom from "assets/img/drmm/edu_01_dRMM.jpg";
import science from "assets/img/drmm/edu_02_dRMM.jpg";
import cafe from "assets/img/drmm/edu_03_dRMM.jpg";
import gym from "assets/img/drmm/edu_04_dRMM.jpg";
import diningRoom from "assets/img/drmm/edu_05_dRMM.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function EradeCarousel(props) {
  const classes = useStyles();

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
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={20} sm={20} md={20} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img src={diningRoom} alt="diningRoom"/>
                    <div className="slick-caption">
                      <Primary>
                        <h4>
                          Dining Room | © dRMM
                        </h4>
                      </Primary>
                    </div>
                  </div>
                  <div>
                    <img src={gym} alt="Gym" className="slick-image" />
                    <div className="slick-caption">
                      <Primary>
                        <h4>
                          Sports Hall | © dRMM
                        </h4>
                      </Primary>
                    </div>
                  </div>

                  <div>
                    <img src={cafe} alt="Second slide" className="slick-image" />
                    <div className="slick-caption">
                      <Primary>
                        <h4>
                         Cafe | © dRMM
                        </h4>
                      </Primary>
                    </div>
                  </div>

                  <div>
                    <img src={science} alt="science" className="slick-image" />
                    <div className="slick-caption">
                      <Primary>
                        <h4>
                          Science Classroom | © dRMM
                        </h4>
                      </Primary>
                    </div>
                  </div>

                  <div>
                    <img src={classroom} alt="classroom" />
                    <div className="slick-caption">
                      <Primary>
                        <h4>
                         Classroom | © dRMM
                        </h4>
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
  );
}