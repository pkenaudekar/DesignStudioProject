import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        fontSize: '1vw',
        color: 'white',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Design Studio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#424242',
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <br />
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Footer;
