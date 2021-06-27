import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Grid } from "@material-ui/core";
import "./Components.sass";

export default function Overview(props) {

  return (
      <Grid container spacing={1} direction="row" alignItems="stretch" justify="space-between" id="overview">
        <Grid item xs={6}>
          <h1 id="overview-credit-count">4</h1>
        </Grid>

        <Grid item xs={6}>
          <h1 id="overview-workload-count">2</h1>
        </Grid>

        <Grid item xs={12}>
          <div class="overview-notification on-warn"><ErrorOutlineIcon color="secondary" /> Credits not sufficient</div>
        </Grid>
        <Grid item xs={12}>
          <div class="overview-notification on-ok"><CheckCircleIcon color="green" /> No schedule overlappings</div>
        </Grid>
      </Grid>
  );
}
