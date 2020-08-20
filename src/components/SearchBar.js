import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '36vw',
    height: 50,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    searchIn: '',
    searchFor: '',
  });

  const handleChange = (event) => {
    setState({
      ...state,
      searchIn: event.target.value,
    });
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    console.log(event.target.value);
  };

  return (
    <div
      style={{
        border: '3px solid orange',
        borderRadius: '6px',
        width: '98.6%',
        padding: 0,
        position: 'fixed',
        zIndex: 1,
        margin: 'auto',
      }}
    >
      <Grid
        spacing={1}
        container
        direction="row"
        justify="center"
        alignItems="baseline"
      >
        <Grid item xs={3} />
        <Grid item xs={6}>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            style={{
              marginTop: 7,
              backgroundColor: '#eee',
            }}
          >
            <InputLabel htmlFor="search-in">Search In</InputLabel>
            <Select
              native
              value={state.searchIn}
              onChange={handleChange}
              label="SearchIn"
              inputProps={{
                name: 'searchIn',
                id: 'search-in',
              }}
            >
              <option aria-label="None" value="" />
              <option value={'Sofas'}>Sofas</option>
              <option value={'Seating'}>Seating</option>
              <option value={'Chairs'}>Chairs</option>
              <option value={'Tables'}>Tables</option>
              <option value={'Cabinetes'}>Cabinetes</option>
              <option value={'Dining&Bar'}>Dining & Bar</option>
              <option value={'Decor'}>Decor</option>
              <option value={'Lighting'}>Lighting</option>
              <option value={'Beds'}>Beds</option>
              <option value={'Mattresses'}>Mattresses</option>
              <option value={'Beddings'}>Beddings</option>
              <option value={'Storage'}>Storage</option>
              <option value={'Furnishings'}>Furnishings</option>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              id="outlined-basic"
              label="Search Design Studio"
              variant="outlined"
              onChange={onInputChange}
              style={{ width: '30vw', backgroundColor: '#eee' }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <Button
              style={{ height: 55, backgroundColor: '#eee' }}
              variant="outlined"
              onSubmit={onSubmit}
            >
              Search
            </Button>
          </FormControl>
          <FormControl className={classes.margin}></FormControl>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}
