import React from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import { fetchSliders } from '../actions';

class Sliders extends React.Component {
  componentDidMount() {
    this.props.fetchSliders();
  }

  renderSlider() {
    return this.props.sliders.map((slider) => {
      return (
        <React.Fragment key={slider.id}>
          <img
            src={slider.pictureUrl}
            style={{
              maxHeight: `${slider.maxHeight}`,
              maxWidth: `${slider.maxWidth}`,
            }}
            alt=""
          />
        </React.Fragment>
      );
    });
  }

  render() {
    //console.log(this.props.sliders);
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: 77,
          }}
        >
          <Carousel
            autoplay={true}
            speed={3}
            wrapAround={true}
            autoGenerateStyleTag={true}
            heightMode={'current'}
          >
            {this.renderSlider()}
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { sliders: state.sliders };
};

export default connect(mapStateToProps, { fetchSliders })(Sliders);
