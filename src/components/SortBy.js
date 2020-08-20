import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SortBy = () => {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="sortBy">Sort By</InputLabel>
        <Select
          labelId="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={handleChange}
          label="Sort By"
        >
          <MenuItem value="">
            <em>Featured</em>
          </MenuItem>
          <MenuItem value={'lowToHigh'}>Price: Low to High</MenuItem>
          <MenuItem value={'highToLow'}>Price: High to Low</MenuItem>
          <MenuItem value={'popularity'}>Popularity</MenuItem>
          <MenuItem value={'latest'}>Latest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortBy;
