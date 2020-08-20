import React from 'react';
import { connect } from 'react-redux';
import { fetchLivingRooms } from '../actions';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { autoPlay } from 'react-swipeable-views-utils';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    maxWidth: 650,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    alignSelf: 'center',
    width: '55vw',
  },
  media: {
    height: 500,
    maxWidth: 400,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  },
});

class LivingRoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      value: 0,
      quantity: '1',
      open: false,
      scroll: 'paper',
      maxSteps: 3,
      steps: [[0, 1]],
    };
  }

  componentDidMount() {
    this.props.fetchLivingRooms();
  }

  descriptionElementRef = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open) {
      const { current: descriptionElement } = this.descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }

  renderList() {
    const { classes } = this.props;
    return this.props.livingRooms.map((livingRoom, row) => {
      return (
        <Grid item xs={6} key={livingRoom.id}>
          <div
            className={classes.root}
            style={{
              height: '100%',
              border: '3px solid orange',
              borderRadius: '5px',
            }}
          >
            <Tabs
              orientation="vertical"
              variant="standard"
              value={this.state.value}
              onChange={(event, newValue) => this.setState({ value: newValue })}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {livingRoom.colourOpt.map((colourTab, index) => {
                return (
                  <Tab
                    key={colourTab.colour}
                    label={colourTab.colour}
                    {...a11yProps(index)}
                  />
                );
              })}
            </Tabs>
            <SwipeableViews
              axis={useTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.value}
              onChangeIndex={(index) => this.setState({ value: index })}
            >
              {livingRoom.colourOpt.map((colourTab, index) => {
                return (
                  <TabPanel
                    key={colourTab.colour}
                    value={this.state.value}
                    index={index}
                  >
                    <div className={classes.root}>
                      <AutoPlaySwipeableViews
                        axis={useTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={(step) =>
                          this.setState({ activeStep: step })
                        }
                        enableMouseEvents
                      >
                        {colourTab.thumbnailImages.map((step, index) => (
                          <div key={step.imageUrl}>
                            {Math.abs(this.state.activeStep - index) <= 2 ? (
                              <img
                                className={classes.img}
                                src={step.imageUrl}
                                alt={'image' + { index }}
                              />
                            ) : null}
                          </div>
                        ))}
                      </AutoPlaySwipeableViews>
                      <p>Number of pics ={this.state.steps[0][1]}</p>
                    </div>
                    <MobileStepper
                      variant="progress"
                      steps={this.state.maxSteps}
                      position="static"
                      activeStep={this.state.activeStep}
                      className={classes.root}
                      nextButton={
                        <Button
                          size="small"
                          onClick={() =>
                            this.setState({
                              activeStep: this.state.activeStep + 1,
                            })
                          }
                          disabled={
                            this.state.activeStep === this.state.maxSteps - 1
                          }
                        >
                          {useTheme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button
                          size="small"
                          onClick={() =>
                            this.setState({
                              activeStep: this.state.activeStep - 1,
                            })
                          }
                          disabled={this.state.activeStep === 0}
                        >
                          {useTheme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                        </Button>
                      }
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {livingRoom.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {livingRoom.details}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                        {'\u20B9'} {colourTab.price}
                      </Typography>
                    </CardContent>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Quantity"
                      value={this.state.quantity}
                      onChange={(event) =>
                        this.setState({ quantity: event.target.value })
                      }
                      helperText="Please select the quantity"
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </TextField>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                      <Button size="small" color="primary">
                        Buy
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() =>
                          this.setState({ open: true, scroll: 'body' })
                        }
                      >
                        Details
                      </Button>
                      <Dialog
                        open={this.state.open}
                        onClose={() => this.setState({ open: false })}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <DialogTitle id="scroll-dialog-title">
                          Details
                        </DialogTitle>
                        <DialogContent dividers={this.state.scroll === 'paper'}>
                          <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                          >
                            {livingRoom.highlights}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => this.setState({ open: false })}
                            color="primary"
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </CardActions>
                  </TabPanel>
                );
              })}
            </SwipeableViews>
          </div>
        </Grid>
      );
    });
    // });
  }

  render() {
    console.log(this.props.livingRooms);
    return (
      <React.Fragment>
        <div className={this.root} style={{ margin: '0 4vw' }}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {this.renderList()}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { livingRooms: state.livingRooms };
};

export default connect(mapStateToProps, { fetchLivingRooms })(
  withStyles(useStyles)(LivingRoomList)
);
