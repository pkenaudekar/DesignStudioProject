import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    container: {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
    },
    media: {
      position: 'relative',
    },
    card: {
      display: 'flex',
    },
    border: {
      border: '3px solid orange',
      borderRadius: '6px',
    },
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container>
          <Grid item xs={12}>
            <div
              align="center"
              style={{
                fontSize: '1vw',
              }}
            >
              <h1>About Us</h1>
            </div>
            <Paper elevation={3} className={classes.paper}>
              <Card className={classes.card}>
                <div
                  style={{
                    border: '3px solid orange',
                    borderRadius: '6px',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image="/assets/images/aboutus/about-us-cover-image-sp.webp"
                    />
                    <div
                      align="center"
                      style={{
                        position: 'absolute',
                        color: 'black',
                        top: '3vw',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '1vw',
                      }}
                    >
                      <h2>A space to call your own</h2>
                      <p
                        style={{
                          maxWidth: 560,
                          padding: '0 30',
                          lineHeight: 2,
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                      >
                        The home that you always wanted is the home you deserve.
                        Livspace helps you realize that dream with interior
                        design that’s beautiful, reliable, and created just for
                        you.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent
              style={{
                border: '3px solid orange',
                borderRadius: '6px',
              }}
            >
              <h1>8271</h1>
              <p>Happy Customers</p>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent
              style={{
                border: '3px solid orange',
                borderRadius: '6px',
              }}
            >
              <h1>2000+</h1>
              <p>Registered Designers</p>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent
              style={{
                border: '3px solid orange',
                borderRadius: '6px',
              }}
            >
              <h1>7</h1>
              <p>Cities in India</p>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent
              style={{
                border: '3px solid orange',
                borderRadius: '6px',
              }}
            >
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/cities-web.png"
              />
              <h2>Nine cities and counting...</h2>
              <p align="center">
                <b>Headquarters: </b>Design Studio, 4th floor, Uni Park Road,
                Bengaluru - 560001 <br />
                <b>Information:</b>
                care@designstudio.com
                <br /> <b>Press:</b>press@designstudio.com
              </p>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper} align="center"></Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent
              style={{
                border: '3px solid orange',
                borderRadius: '6px',
              }}
            >
              <h1>The Story of Design Studio</h1>
              <p>
                Ramesh and Ayush, Design Studio founders and college friends,
                were just like any other homeowner—they simply wanted good
                interiors. Instead, they got a rather appalling experience. It
                started with trouble in finding the right professionals. It
                ended with the realization that even after spending a lot of
                time and money one could never be sure of a fair price, quality
                or even the final result. Determined to never let another
                homeowner experience the misery, they created what we now call
                Design Studio. Launched in 2015 in India, Design Studio is now
                the trusted brand for complete home interior design for
                thousands of homeowners.
              </p>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper} align="center"></Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={2}
      >
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/bbc.webp"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/business-standard.webp"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/cnbc.webp"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/et-logo.png"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/ForbestIndia.png"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/fortune.png"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/ht.webp"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} className={classes.paper} align="center">
            <CardContent>
              <CardMedia
                component="img"
                className={classes.media}
                image="/assets/images/aboutus/times-of-india.png"
              />
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AboutUs;
