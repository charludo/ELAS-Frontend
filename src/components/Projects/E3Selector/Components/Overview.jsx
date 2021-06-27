import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Grid } from "@material-ui/core";
import "./Components.sass";

export default function Overview(props) {
    const creditNotification = () => {
        switch(props.creditsStatus){
            case "on-ok": return(<div class="overview-notification on-ok"><CheckCircleIcon /> Credit target matched</div>)
            case "on-warn" : return(<div class="overview-notification on-warn"><ErrorIcon /> Credit target exceeded</div>)
            default: return(<div class="overview-notification"><ErrorIcon /> Credit target not matched</div>)
        }
    }

    if (props.selectedList.length) {
      return (
          <Grid container spacing={1} direction="row" alignItems="stretch" justify="space-between" id="overview">
            <Grid item xs={8}>
              <h1 class={props.creditsStatus} id="overview-credit-count">{props.selectedCredits}</h1>
            </Grid>

            <Grid item xs={4}>
              <h1 id="overview-workload-count">{props.workload}</h1>
            </Grid>

            <Grid item xs={12}>
              {creditNotification()}
            </Grid>
            <Grid item xs={12}>
              <div class="overview-notification on-ok"><CheckCircleIcon /> No schedule overlappings</div>
            </Grid>
          </Grid>
      );
    } else {
      return <p>add courses to start receiving information</p>
    }
}
