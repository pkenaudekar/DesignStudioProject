import { combineReducers } from 'redux';
import testimonialReducer from './testimonialReducer';
import highlightReducer from './highlightReducer';
import sliderReducer from './sliderReducer';
import livingRoomReducer from './livingRoomReducer';

export default combineReducers({
  testimonials: testimonialReducer,
  highlights: highlightReducer,
  sliders: sliderReducer,
  livingRooms: livingRoomReducer,
});
