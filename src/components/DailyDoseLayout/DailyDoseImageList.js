import React from 'react';
import { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import info1 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_04.jpg';
import info2 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_05.jpg';
import timeline1 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_06.jpg';
import timeline2 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_07.jpg';
import timeline3 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_08.jpg';
import timeline4 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_09.jpg';
import timeline5 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_10.jpg';
import timeline6 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_11.jpg';
import timeline7 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_12.jpg';
import timeline8 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_13.jpg';
import timeline9 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_14.jpg';





class DailyDoseImgList extends Component {

  // const classes = useStyles();

  state = {
    index: 0,
    picList: [
      info1, info2, timeline1,
      timeline2, timeline3, timeline4, timeline5,
      timeline6, timeline7, timeline8, timeline9
    ]
  }

  tileImages() {
    var i
    for (i= 0; i < this.state.picList.length; this.state.index ++) {
        return this.state.picList[this.set.state.index]
    }
  }

//   for(i = 0; i <this.state.picList.length; i++) {
//   this.state.index = + 1
//   return this.setState(this.picList[index])
// }

render() {

  return (
    <div>
      <img src={this.state.picList[0]} alt="test" width="100%" />
    </div>
  )
}
}


export default DailyDoseImgList;