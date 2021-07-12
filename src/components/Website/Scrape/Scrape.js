import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  }
}));

export default function Scrape() {
  const classes = useStyles();

  const [scrapeState, handleScrape] = useState("checking...");

  useEffect(() => {
      fetch("http://localhost:5000/commence_scraping")
      .then(response => response.json())
      .then(data => {
        handleScrape(data.statusMessage);
      })
      .catch(error=>{
        console.log(error)
      })
  }, []);

  const [e3, sete3] = useState("");
  const [insight, setinsight] = useState("");

  const doScrape = (e) => {
    e.preventDefault();
    e.target.reset()

    fetch("http://localhost:5000/commence_scraping", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          e3: e3,
          insight: insight
      })
    });
    handleScrape("running...");
  }

  return (
    <Grid container className={classes.root} direction="column" spacing={5} alignItems="center" justify="center">
      <CssBaseline/>
      <form onSubmit={doScrape}>
          <TextField id="e3url" label="E3 Courses Tree URL (LSF)" required fullWidth onChange={(e) => sete3(e.target.value)} disabled={(scrapeState === "running..." || scrapeState === "checking...") ? true : false}/>
          <TextField id="insighturl" label="Course Insights Tree URL (LSF)" required fullWidth onChange={(e) => setinsight(e.target.value)} disabled={(scrapeState === "running..." || scrapeState === "checking...") ? true : false}/>
          <Grid container direction="row" spacing={5} alignItems="center" justify="flex-start" style={{marginTop: 36, paddingLeft: 18}}>
              <Button variant="contained" color="primary" className={classes.submit} disabled={(scrapeState === "running..." || scrapeState === "checking...") ? true : false} type="submit">Scrape Now</Button>
              <p style={{paddingLeft: 12}}>Last scraped: { scrapeState }</p>
          </Grid>
      </form>
    </Grid>
  );
}
