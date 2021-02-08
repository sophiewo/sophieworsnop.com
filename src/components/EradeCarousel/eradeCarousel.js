import React from "react";

import Carousel from "react-slick";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import classroom from "assets/img/drmm/edu_01_dRMM.jpg";
import science from "assets/img/drmm/edu_02_dRMM.jpg";
import cafe from "assets/img/drmm/edu_03_dRMM.jpg";
import gym from "assets/img/drmm/edu_04_dRMM.jpg";
import diningRoom from "assets/img/drmm/edu_05_dRMM.jpg";


import styles from "assets/jss/material-kit-react/views/carouselStyle.js";
import EradeImg from "./eradeImg";

const useStyles = makeStyles(styles);

export default function EradeCarousel() {
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
            <GridItem xs={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <EradeImg
                    img={diningRoom}
                    alt="Dining Room"
                    title="Dining Room | © dRMM" />

                  <EradeImg
                    img={gym}
                    alt="Gym"
                    title="Sports Hall | © dRMM" />

                  <EradeImg
                    img={cafe}
                    alt="Cafe"
                    title="Cafe | © dRMM" />

                  <EradeImg
                    img={science}
                    alt="Science Classroom"
                    title="Science Classroom | © dRMM" />

                  <EradeImg
                    img={classroom}
                    alt="Classroom"
                    title="Classroom | © dRMM" />
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}