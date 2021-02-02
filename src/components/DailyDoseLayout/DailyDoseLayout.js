import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import tile1 from '../../assets/img/dailydose/DailyDose_SophieWorsnop_Page_06.jpg';
import DailyDoseImgList from './DailyDoseImageList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }

}));

export default function DailyDoseLayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} spacing={1}>
        <Grid item xs={3} >
          <DailyDoseImgList/>
        </Grid>

        <Grid item xs={3} >
          {/* <img src={tile1} alt="test" width="100%" /> */}
        </Grid>

        <Grid item xs={3} >
          {/* <img src={tile1} alt="test" width="100%" /> */}
        </Grid>

        <Grid item xs={3} >
          {/* <img src={tile1} alt="test" width="100%" /> */}
        </Grid>

      </Grid>
    </div>
  );
}
