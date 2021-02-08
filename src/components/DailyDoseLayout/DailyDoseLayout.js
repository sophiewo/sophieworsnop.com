import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import info1 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_04.png';
import info2 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_29.png';
import info3 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_30.png';
import timeline1 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_06.png';
import timeline2 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_07.png';
import timeline3 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_08.png';
import timeline4 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_09.png';
import timeline5 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_10.png';
import timeline6 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_11.png';
import timeline7 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_12.png';
import timeline8 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_13.png';
import timeline9 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_14.png';

import article from '../../assets/img/rca/SophieWorsnop_Article.png'

import plan00 from '../../assets/img/rca/DailyDose__Page_1.png'
import plan01 from '../../assets/img/rca/DailyDose__Page_2.png'
import plan02 from '../../assets/img/rca/DailyDose__Page_3.png'
import plan03 from '../../assets/img/rca/DailyDose__Page_4.png'
import plan04 from '../../assets/img/rca/DailyDose__Page_5.png'
import plan05 from '../../assets/img/rca/DailyDose__Page_6.png'
import plan06 from '../../assets/img/rca/DailyDose__Page_7.png'
import plan07 from '../../assets/img/rca/DailyDose__Page_8.png'

import section from '../../assets/img/rca/SophieWorsnop_02.png'

import map from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_36.png'

import axo from '../../assets/img/rca/DailyDose_ExplodedAxo.png'


class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: [info1, info2, info3],
      timeline: [
        timeline1, timeline2, timeline3, timeline4,
        timeline5, timeline6, timeline7, timeline8, timeline9
      ]
      
    }
  }

  render() {

    const infoImages = this.state.info.map((image) => {
      return (
        <Grid item xs={4} >
          <img src={image} alt="" width="100%" />
        </Grid>
      )
    })

    const timelineImages = this.state.timeline.map((image) => {
      return (
        <Grid item xs={4} >
          <img src={image} alt="timeline" width="100%" />
        </Grid>
      )
    })

    const planImg = [plan00, plan01, plan02, plan03, plan04, plan05, plan06, plan07]
    const plans = planImg.map((image) => {
      return (
        <Grid item xs={6} >
          <img src={image} alt="plans" width="100%" />
        </Grid>
      )
    })

    return (
      <div>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={12} >
            <img src={article} alt="article" width="100%" />
          </Grid>
          {infoImages}
          {plans}
          <Grid item xs={12} alignItems="center"  >
            <img src={axo} alt="axo" width="100%" />
          </Grid>
          <Grid item xs={12} >
            <img src={section} alt="section" width="100%" />
          </Grid>
          {timelineImages}
          <Grid item xs={12} >
            <img src={map} alt="map" width="100%" />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ImageList;