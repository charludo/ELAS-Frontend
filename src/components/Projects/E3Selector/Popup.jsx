import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function Popup() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="stretch"
        justify="space-between"
      >
        <Grid item xs={2}>
          4 (number of credits)
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item>credits selected</Grid>
          </Grid>
        </Grid>

        <Grid item xs={2}>
          2 (weekly workload)
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="flex-start"
            justify="space-between"
          >
            <Grid item>weekly workload</Grid>
            <Grid item>hrs</Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ErrorOutlineIcon color="secondary" />
          "Credits not sufficient"
        </Grid>
        <Grid item xs={12}>
          <CheckCircleIcon color="green" />
          "No schedule overlapping"
        </Grid>
      </Grid>
    </Card>
  );
}
