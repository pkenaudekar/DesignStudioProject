import React from 'react';
import SearchBar from './SearchBar';
import Slider from './Slider';
import TestimonialList from './TestimonialList';
import Highlights from './Highlights';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    card: {
      display: 'flex',
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SearchBar />
      <Paper elevation={3} className={classes.paper}>
        <Card className={classes.card}>
          <Slider />
        </Card>
      </Paper>
      <br />
      <br />
      <div align="center">
        <h1>One-stop shop for everything interiors</h1>
        <Highlights />
      </div>
      <br />
      <br />
      <div align="center">
        <h1>Design Studio Customer Reviews</h1>
        <TestimonialList />
      </div>
      <br />
    </React.Fragment>
  );
};

export default Landing;
