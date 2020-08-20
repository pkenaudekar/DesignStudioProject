import React from 'react';
import { connect } from 'react-redux';
import { fetchHighlights } from '../actions';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Highlights extends React.Component {
  componentDidMount() {
    this.props.fetchHighlights();
  }

  renderHighlight() {
    return this.props.highlights.map((highlight) => {
      return (
        <Grid item xs={5} key={highlight.id}>
          <Card
            className={this.root}
            style={{
              maxWidth: 528,
              height: '100%',
              border: '3px solid orange',
              borderRadius: '5px',
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Highlight Items"
                height="297.44"
                image={highlight.thumbnailUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {highlight.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {highlight.details}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
  }

  render() {
    //console.log(this.props.highlights);
    return (
      <React.Fragment>
        <div className={this.root}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {this.renderHighlight()}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { highlights: state.highlights };
};

export default connect(mapStateToProps, { fetchHighlights })(Highlights);
