export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TESTIMONIALS':
      return action.payload;
    default:
      return state;
  }
};
