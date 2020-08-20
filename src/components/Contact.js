import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 80,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(0);
  const [tab1Reason, setTab1Reason] = React.useState('');
  const [tab1SubReason1, setTab1SubReason1] = React.useState('');
  const [tab1SubReason2, setTab1SubReason2] = React.useState('');
  const [tab1SubReason3, setTab1SubReason3] = React.useState('');
  const [tab1Reason3SubReason1, setTab1Reason3SubReason1] = React.useState('');
  const [tab1Reason3SubReason3, setTab1Reason3SubReason3] = React.useState('');
  const [tab1Reason3SubReason4, setTab1Reason3SubReason4] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeTab1Reason = (event) => {
    setTab1Reason(event.target.value);
  };

  const handleChangeTab1SubReason1 = (event) => {
    setTab1SubReason1(event.target.value);
  };

  const handleChangeTab1SubReason2 = (event) => {
    setTab1SubReason2(event.target.value);
  };

  const handleChangeTab1SubReason3 = (event) => {
    setTab1SubReason3(event.target.value);
  };

  const handleChangeTab1Reason3SubReason1 = (event) => {
    setTab1Reason3SubReason1(event.target.value);
  };

  const handleChangeTab1Reason3SubReason3 = (event) => {
    setTab1Reason3SubReason3(event.target.value);
  };

  const handleChangeTab1Reason3SubReason4 = (event) => {
    setTab1Reason3SubReason4(event.target.value);
  };

  return (
    <React.Fragment>
      <div align="center">
        <h1>Write To Us</h1>
      </div>
      <Paper
        className={classes.root}
        style={{
          border: '3px solid orange',
          borderRadius: '6px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="New Complaint or Feedback?" {...a11yProps(0)} />
          <Tab label="Have an Unresolved Complaint" {...a11yProps(1)} />
          <Tab label="Issue Not Resolved?" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div
            className={classes.paper}
            style={{ maxWidth: '450px', margin: 'auto' }}
          >
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Typography component="h1" variant="h6">
                  Personal Details
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="tab1Name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="tab1Email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="tab1MobileNumber"
                    label="Mobile Number"
                    name="mobileNumber"
                    autoComplete="mobile"
                  />
                </Grid>
                <Typography component="h1" variant="h6">
                  Query Details
                </Typography>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                  required
                >
                  <InputLabel id="reason">Reason</InputLabel>
                  <Select
                    labelId="reason"
                    id="tab1reason"
                    value={tab1Reason}
                    onChange={handleChangeTab1Reason}
                    label="Reason"
                  >
                    <MenuItem value="">
                      <em>Select a reason</em>
                    </MenuItem>
                    <MenuItem value={'nonOrder'}>Non Order Related</MenuItem>
                    <MenuItem value={'services'}>
                      Design Studio Services
                    </MenuItem>
                    <MenuItem value={'order'}>Order Related</MenuItem>
                  </Select>
                </FormControl>
                {tab1Reason === 'nonOrder' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="sub-reason1-simple-select-outlined-label">
                      Sub Reason
                    </InputLabel>
                    <Select
                      labelId="sub-reason1-simple-select-outlined-label"
                      id="tab1SubReason1"
                      value={tab1SubReason1}
                      onChange={handleChangeTab1SubReason1}
                      label="SubReason"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'varPaymentOpt'}>
                        Various Payment Options
                      </MenuItem>
                      <MenuItem value={'order&Discount'}>
                        Order and Discounts
                      </MenuItem>
                      <MenuItem value={'web&Feedback'}>
                        Website Related / Feedback
                      </MenuItem>
                      <MenuItem value={'product'}>
                        Product Related Query
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
                {tab1Reason === 'services' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="sub-reason2-simple-select-outlined-label">
                      Sub Reason
                    </InputLabel>
                    <Select
                      labelId="sub-reason2-simple-select-outlined-label"
                      id="tab1SubReason2"
                      value={tab1SubReason2}
                      onChange={handleChangeTab1SubReason2}
                      label="SubReason"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'corp&Bulk'}>
                        Corporate sale / Bulk Order
                      </MenuItem>
                      <MenuItem value={'order&policies'}>Policies</MenuItem>
                      <MenuItem value={'sell'}>Sell on Design Studio</MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
                {tab1Reason === 'order' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="sub-reason3-simple-select-outlined-label">
                      Sub Reason
                    </InputLabel>
                    <Select
                      labelId="sub-reason3-simple-select-outlined-label"
                      id="tab1SubReason3"
                      value={tab1SubReason3}
                      onChange={handleChangeTab1SubReason3}
                      label="SubReason"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'payment&Bulk'}>
                        Payment Related
                      </MenuItem>
                      <MenuItem value={'track'}>Track Your Order</MenuItem>
                      <MenuItem value={'return'}>Return Item</MenuItem>
                      <MenuItem value={'changeDetails'}>
                        Change Details
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
                {tab1Reason === 'order' && tab1SubReason3 === 'payment&Bulk' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="reason3-sub-reason1-simple-select-outlined-label">
                      Sub Reason Type
                    </InputLabel>
                    <Select
                      labelId="reason3-sub-reason1-simple-select-outlined-label"
                      id="tab1Reason3SubEeason1"
                      value={tab1Reason3SubReason1}
                      onChange={handleChangeTab1Reason3SubReason1}
                      label="Reason3SubReason1"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'refundStatus'}>Refund Status</MenuItem>
                      <MenuItem value={'orderNotConfirmed'}>
                        Order not Confirmed
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
                {tab1Reason === 'order' && tab1SubReason3 === 'return' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="reason3-sub-reason3-simple-select-outlined-label">
                      Sub Reason Type
                    </InputLabel>
                    <Select
                      labelId="reason3-sub-reason3-simple-select-outlined-label"
                      id="tab1Reason3SubReason3"
                      value={tab1Reason3SubReason3}
                      onChange={handleChangeTab1Reason3SubReason3}
                      label="Reason3SubReason3"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'damageOrDefect'}>
                        Damage / Defactive
                      </MenuItem>
                      <MenuItem value={'incompleteOrMissing'}>
                        Incomplete items or content missing
                      </MenuItem>
                      <MenuItem value={'incorrectProduct'}>
                        Incorrect Product
                      </MenuItem>
                      <MenuItem value={'termiteOrBorer'}>
                        Termite / borer infestation
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
                {tab1Reason === 'order' &&
                tab1SubReason3 === 'changeDetails' ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
                  >
                    <InputLabel id="reason3-sub-reason3-simple-select-outlined-label">
                      Sub Reason Type
                    </InputLabel>
                    <Select
                      labelId="reason3-sub-reason4-simple-select-outlined-label"
                      id="tab1Reason3SubReason4"
                      value={tab1Reason3SubReason4}
                      onChange={handleChangeTab1Reason3SubReason4}
                      label="Reason3SubReason4"
                    >
                      <MenuItem value="">
                        <em>Select a sub reason</em>
                      </MenuItem>
                      <MenuItem value={'shippingAddress'}>
                        Shipping Address
                      </MenuItem>
                      <MenuItem value={'billingAddress'}>
                        Billing Address
                      </MenuItem>
                      <MenuItem value={'phonenumber'}>Phone Number</MenuItem>
                      <MenuItem value={'emailAddress'}>Email Address</MenuItem>
                    </Select>
                  </FormControl>
                ) : null}

                {tab1Reason === 'nonOrder' && tab1SubReason1 === 'product' ? (
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="tab1ProductName"
                      label="Product Name"
                      name="productName"
                      autoComplete="product"
                    />
                  </Grid>
                ) : null}

                {tab1Reason === 'order' ? (
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="tab1OrderId"
                      label="Order Id"
                      name="orderId"
                      autoComplete="orderId"
                    />
                  </Grid>
                ) : null}
                {tab1Reason === '' ||
                (tab1Reason === 'nonOrder' &&
                  (tab1SubReason1 === '' ||
                    tab1SubReason1 === 'web&Feedback' ||
                    tab1SubReason1 === 'product')) ||
                (tab1Reason === 'order' &&
                  (tab1SubReason3 === '' ||
                    tab1SubReason3 === 'payment&Bulk' ||
                    tab1SubReason3 === 'track' ||
                    tab1SubReason3 === 'return' ||
                    tab1SubReason3 === 'changeDetails')) ? (
                  <React.Fragment>
                    <Typography component="h1" variant="h6">
                      Additional Details
                    </Typography>
                    <Grid item xs={12}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="tab1ContainedButtonFile"
                        multiple
                        type="file"
                      />
                      <label htmlFor="tab1ContainedButtonFile">
                        <Button
                          variant="contained"
                          color="default"
                          component="span"
                          fullWidth
                          startIcon={<CloudUploadIcon />}
                        >
                          File Upload
                        </Button>
                      </label>
                      Choose File .jpg, .jpeg, .png, .bmp Only. Max Size 5 Mb
                      (maximum upto 3)
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="tab1Comment"
                        label="Your Comments *"
                        multiline
                        fullWidth
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                  </React.Fragment>
                ) : null}
              </Grid>
              <br />
              {tab1Reason === '' ||
              (tab1Reason === 'nonOrder' &&
                (tab1SubReason1 === '' ||
                  tab1SubReason1 === 'web&Feedback' ||
                  tab1SubReason1 === 'product')) ||
              (tab1Reason === 'order' &&
                (tab1SubReason3 === '' ||
                  tab1SubReason3 === 'payment&Bulk' ||
                  tab1SubReason3 === 'track' ||
                  tab1SubReason3 === 'return' ||
                  tab1SubReason3 === 'changeDetails')) ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              ) : null}

              {tab1Reason === 'nonOrder' &&
              tab1SubReason1 === 'varPaymentOpt' ? (
                <Paper elevation={3}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        component="p"
                      >
                        We offer a wide range of payment options to accommodate
                        every needs and offer maximum flexibility. The following
                        payment options are currently available on Design
                        Studio:
                        <br />
                        <br />
                        {bull} Internet Banking (we have partnered with 54
                        leading banks in India)
                        <br />
                        <br /> {bull} Visa, Master, American Express and Diners
                        Credit Cards <br />
                        <br />
                        {bull} Debit Cards issued by all leading banks in India{' '}
                        <br />
                        <br />
                        {bull} Design Studio Gift cards
                        <br />
                        <br />
                        {bull} UPI: Unified Payment Interface <br />
                        <br />
                        {bull} PayUMoney
                        <br />
                        <br />
                        {bull} No Cost EMI <br />
                        <br />
                        {bull} Easy EMI Options by Citi, HDFC, Axis, HSBC,
                        Kotak, Standard Chartered, ICICI bank, Yes bank, RBL,
                        State Bank of India, and Induslnd credit card holders{' '}
                        <br />
                        <br />
                        {bull} Cash On Delivery (This service is currently
                        unavailable) <br />
                        <br />
                        {bull}
                        Online Wallets such as Mobikwik, Paytm & Payzapp {bull}
                        PayPal (Available only on Website & Mobile Site)
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ) : null}

              {tab1Reason === 'nonOrder' &&
              tab1SubReason1 === 'order&Discount' ? (
                <Paper elevation={3}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        component="p"
                      >
                        We have various offers on our website & we also send
                        special offers/discounts via email and text messages. If
                        you're unable to apply coupon code:
                        <br />
                        <br />
                        {bull} Please login via the same email address through
                        which you received the code
                        <br />
                        <br />
                        {bull} Please check the terms of your coupon code
                        <br />
                        <br />
                        {bull} Please log out, close the browser and login again
                        <br />
                        <br />
                        {bull} Few of our coupons are not valid on Hot Priced
                        products
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ) : null}
              {tab1Reason === 'services' && tab1SubReason2 === 'corp&Bulk' ? (
                <Paper elevation={3}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        component="p"
                      >
                        We appreciate your interest in doing business with us.
                        Please click on this
                        <Link href="#"> Link </Link>
                        and fill in the details. We have a special team to
                        handle requests like yours. After you fill in the
                        details, the team will get in touch with you and take
                        things forward.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ) : null}
              {tab1Reason === 'services' &&
              tab1SubReason2 === 'order&policies' ? (
                <Paper elevation={3}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        component="p"
                      >
                        <b>Return Policy:</b>
                        <br />
                        <br /> Products can be returned within 7 days of
                        delivery for the following reasons: Damaged/Dead On
                        Arrival/Manufacturing Defect/Expired Product/Incorrect
                        Product. Please refer to our
                        <Link href="#"> Easy Returns Policy </Link> for more
                        details. <br />
                        <br />
                        <b>Cancellation Policy:</b> <br />
                        <br /> We do not accept cancellations after an order is
                        placed.In case of our 100 nights trial programme, you
                        can pick a mattress from our trial range and place an
                        order. If you like it, keep it. If you don’t, return it
                        within 100 days. All you need to do is place a return
                        request, we’ll process your refund. For more
                        information, click <Link href="#"> here. </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ) : null}
              {tab1Reason === 'services' && tab1SubReason2 === 'sell' ? (
                <Paper elevation={3}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        component="p"
                      >
                        "To sell products on our website, you’ll first need to
                        register as a merchant with us.
                        <br />
                        <br /> Please click on this link to{' '}
                        <Link href="#"> register </Link> and share the following
                        information: <br />
                        <br />- Company details: Company name, address and
                        landline number. Enter the official name of the company
                        you would like to register your company as, on Design
                        Studio.
                        <br />
                        <br /> - Personal details: Your name, email address,
                        mobile number, and a password (min 6 characters). If you
                        have an e-mail address/mobile number already registered
                        as a customer account with us, and wish to use the same
                        email address and mobile number for your merchant
                        account, you will get an option to sign in while filling
                        the personal details. Simply login with your customer
                        account credentials and your existing account will be
                        changed to a merchant account. <br />
                        <br />- Bank account details: Beneficiary name, account
                        number and IFSC Code.
                        <br />
                        <br /> For more information, you can write to us at
                        merchant.services@designstudio.com or check our FAQs
                        <Link href="#"> click here </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ) : null}
            </form>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div
            className={classes.paper}
            style={{ maxWidth: '450px', margin: 'auto' }}
          >
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="tab2OrderId"
                    label="Order Id"
                    name="orderId"
                    autoComplete="orderId"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="tab2Comment"
                    label="Your Comments"
                    multiline
                    required
                    fullWidth
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="tab2ContainedButtonFile"
                    multiple
                    type="file"
                  />
                  <label htmlFor="tab2ContainedButtonFile">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      fullWidth
                      startIcon={<CloudUploadIcon />}
                    >
                      File Upload
                    </Button>
                  </label>
                  Choose File .jpg, .jpeg, .png, .bmp Only. Max Size 5 Mb
                  (maximum upto 3)
                </Grid>
              </Grid>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div
            className={classes.paper}
            style={{ maxWidth: '450px', margin: 'auto' }}
          >
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="tab3OrderId"
                    label="Order Id"
                    name="orderId"
                    autoComplete="orderId"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="tab3Comment"
                    label="Your Comments"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="tab3ContainedButtonFile"
                    multiple
                    type="file"
                  />
                  <label htmlFor="tab3ContainedButtonFile">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      fullWidth
                      startIcon={<CloudUploadIcon />}
                    >
                      File Upload
                    </Button>
                  </label>
                  Choose File .jpg, .jpeg, .png, .bmp Only. Max Size 5 Mb
                  (maximum upto 3)
                </Grid>
              </Grid>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </TabPanel>
      </SwipeableViews>
      <div align="center">
        <h4>CAN'T FIND WHAT YOU ARE LOOKING FOR?</h4>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={3}>
          <Card
            className={classes.root}
            style={{
              border: '3px solid orange',
              borderRadius: '6px',
            }}
          >
            <div className={classes.details}>
              <CardContent className={classes.content} align="center">
                <Typography component="h5" variant="h5">
                  Email Us
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  24x7
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  cs@designstudio.com
                </Typography>
                <CardMedia
                  component="img"
                  className={classes.cover}
                  image="/assets/images/icons/mail.png"
                  title="mail"
                  centered
                />
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            className={classes.root}
            style={{
              border: '3px solid orange',
              borderRadius: '6px',
            }}
          >
            <div className={classes.details}>
              <CardContent className={classes.content} align="center">
                <Typography component="h5" variant="h5">
                  Talk To Us
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  10AM - 7PM (Monday to Saturday)
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  0832-1234-5678
                </Typography>
                <CardMedia
                  component="img"
                  className={classes.cover}
                  image="/assets/images/icons/phone.jpg"
                  title="phone"
                />
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Contact;
