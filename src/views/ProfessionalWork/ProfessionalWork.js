import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Header from "components/Header/Header.js"
import Parallax from "components/Parallax/Parallax.js"

import WorkProjectHeading from "../../components/WorkProjectHeading/WorkProjectHeading.js";
import EradeCarousel from "../../components/EradeCarousel/eradeCarousel";
import PortfolioHeader from "components/PortfolioHeader/PortfolioHeader.js";

import townHallAnnexe from "assets/img/drmm/170222_DidsburyCentre.jpg"

import styles from "assets/jss/material-kit-react/views/archPage.js";


const useStyles = makeStyles(styles);

export default function ProfessionalWork() {
  const classes = useStyles();

  return (
    <div>
      <Header fixed />
      <Parallax filter image={require("assets/img/drmm/PosterOnWall01_cKKoren_dRMM.jpg")}>
        <PortfolioHeader
          portfolioKind="Professional Work"
          portfolioLocation="dRMM Architects, 2013-2019"/>
      </Parallax>

      <div className={classes.section}>
        <div className={classes.container}>
          <GridItem xs={12}>
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
              <GridContainer>
                <GridItem xs={12} className={classes.marginAuto} align="center">
                    <img src={townHallAnnexe} alt="townHallAnnex" width="80%" className="slick-image"/>
                    <h4 className="slick-caption"> Town Hall Annexe | © dRMM </h4>
                    <br></br>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </div>
      </div>
    </div>
  )
};
