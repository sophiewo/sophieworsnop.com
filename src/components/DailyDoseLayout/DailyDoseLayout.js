import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import info1 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_04.png';
import info2 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_05.png';
import timeline1 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_06.png';
import timeline2 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_07.png';
import timeline3 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_08.png';
import timeline4 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_09.png';
import timeline5 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_10.png';
import timeline6 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_11.png';
import timeline7 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_12.png';
import timeline8 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_13.png';
import timeline9 from '../../assets/img/rca/DailyDose_SophieWorsnop_Page_14.png';

class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: [info1, info2],
      timeline: [
        timeline1, timeline2, timeline3, timeline4,
        timeline5, timeline6, timeline7, timeline8, timeline9
      ]
      
    }
  }

  render() {

    const infoImages = this.state.info.map((image) => {
      return (
        <Grid item xs={6} >
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

    return (
      <div>
        <Grid container xs={12} spacing={3}>
          {infoImages}
          {timelineImages}
        </Grid>
      </div>
    )
  }
}

export default ImageList;