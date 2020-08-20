import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../SearchBar';
import SortBy from '../SortBy';
import LivingRoomList from '../LivingRoomList';

const LivingRoom = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <div
        align="center"
        style={{
          marginTop: '100px',
        }}
      >
        <h1>Living Room</h1>
      </div>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <SortBy />
      </Grid>
      <LivingRoomList />
    </React.Fragment>
  );
};

export default LivingRoom;
