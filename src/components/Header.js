import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef1 = React.useRef(null);
  const anchorRef2 = React.useRef(null);

  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleToggle2 = () => {
    setOpen2((prevOpen2) => !prevOpen2);
  };

  const handleClose1 = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }

    setOpen1(false);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  function handleListKeyDown1(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen1(false);
    }
  }

  function handleListKeyDown2(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen2(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen1 = React.useRef(open1);
  React.useEffect(() => {
    if (prevOpen1.current === true && open1 === false) {
      anchorRef1.current.focus();
    }

    prevOpen1.current = open1;
  }, [open1]);

  const prevOpen2 = React.useRef(open2);
  React.useEffect(() => {
    if (prevOpen2.current === true && open2 === false) {
      anchorRef2.current.focus();
    }

    prevOpen2.current = open2;
  }, [open2]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar
          style={{
            backgroundColor: '#00acc1',
            borderRadius: '8px',
            marginTop: '3px',
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button
              ref={anchorRef1}
              aria-controls={open1 ? 'menu-list-spaces' : undefined}
              aria-haspopup="true"
              onClick={handleToggle1}
              color="inherit"
            >
              Spaces
            </Button>
            <Popper
              open={open1}
              anchorEl={anchorRef1.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose1}>
                      <MenuList
                        autoFocusItem={open1}
                        id="menu-list-spaces"
                        onKeyDown={handleListKeyDown1}
                      >
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/livingroom"
                        >
                          Living Room
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/bedroom"
                        >
                          Bedroom
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/bathroom"
                        >
                          Bathroom
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/familyroom"
                        >
                          Family Room
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/guestroom"
                        >
                          Guest Room
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/kitchen"
                        >
                          Kitchen
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/diningroom"
                        >
                          Dining Room
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/homeoffice"
                        >
                          Home Office
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose1}
                          component={Link}
                          to="/spaces/library"
                        >
                          Library
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Button
              ref={anchorRef2}
              aria-controls={open2 ? 'menu-list-products' : undefined}
              aria-haspopup="true"
              onClick={handleToggle2}
              color="inherit"
            >
              Products
            </Button>
            <Popper
              open={open2}
              anchorEl={anchorRef2.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose2}>
                      <MenuList
                        autoFocusItem={open2}
                        id="menu-list-products"
                        onKeyDown={handleListKeyDown2}
                      >
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/sofas"
                        >
                          Sofas
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/seating"
                        >
                          Seating
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/chairs"
                        >
                          Chairs
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/tables"
                        >
                          Tables
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/cabinetry"
                        >
                          Cabinetry
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/diningbar"
                        >
                          Dining & Bar
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/decor"
                        >
                          Decor
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/lighting"
                        >
                          Lighting
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/beds"
                        >
                          Beds
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/matteresses"
                        >
                          Mattresses
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/bedding"
                        >
                          Bedding
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/storage"
                        >
                          Storage
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose2}
                          component={Link}
                          to="/products/furnishings"
                        >
                          Furnishings
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Button color="inherit" href="/aboutus">
              About Us
            </Button>
            <Button color="inherit" href="/contact">
              Contact Us
            </Button>
            <Button color="inherit" href="/signin">
              Sign In
            </Button>
            <IconButton aria-label="cart" color="inherit">
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    </React.Fragment>
  );
};

export default Header;
