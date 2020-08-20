export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIVINGROOM':
      return action.payload;
    default:
      return state;
  }
};
