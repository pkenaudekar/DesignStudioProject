import jsonServer from '../apis/jsonServer';

export const fetchTestimonials = () => async (dispatch) => {
  const response = await jsonServer.get('/testimonials');

  dispatch({
    type: 'FETCH_TESTIMONIALS',
    payload: response.data,
  });
};

export const fetchHighlights = () => async (dispatch) => {
  const response = await jsonServer.get('/highlights');

  dispatch({
    type: 'FETCH_HIGHLIGHTS',
    payload: response.data,
  });
};

export const fetchSliders = () => async (dispatch) => {
  const response = await jsonServer.get('/slider');

  dispatch({
    type: 'FETCH_SLIDERS',
    payload: response.data,
  });
};

export const fetchLivingRooms = () => async (dispatch) => {
  const response = await jsonServer.get('/products');

  dispatch({
    type: 'FETCH_LIVINGROOM',
    payload: response.data,
  });
};
