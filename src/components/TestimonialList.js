import React from 'react';
import { connect } from 'react-redux';
import { fetchTestimonials } from '../actions';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

class TestimonialList extends React.Component {
  componentDidMount() {
    this.props.fetchTestimonials();
  }

  renderList() {
    return this.props.testimonials.map((testimonial) => {
      return (
        <Grid item xs={2} key={testimonial.id}>
          <Card
            className={this.root}
            style={{
              maxWidth: 345,
              height: '100%',
              border: '3px solid orange',
              borderRadius: '10px',
            }}
          >
            <CardHeader
              title={testimonial.custName}
              subheader={testimonial.date}
            />
            <CardMedia
              className={this.media}
              style={{ height: 0, paddingTop: '56.25%' }}
              image={testimonial.thumbnailUrl}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                "{testimonial.comment}"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  }

  render() {
    console.log(this.props.testimonials);
    return (
      <React.Fragment>
        <div className={this.root}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-around"
            alignItems="stretch"
          >
            {this.renderList()}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { testimonials: state.testimonials };
};

export default connect(mapStateToProps, { fetchTestimonials })(TestimonialList);
