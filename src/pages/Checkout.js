import React, { useEffect, useState } from "react"
import { MDBContainer, MDBNavLink, MDBBtn } from "mdbreact";
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider } from '@material-ui/core';
import { Navbar } from "../components/Navbar";
import { useHistory } from "react-router";
import { commerce } from "../lib/commerce";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import useStyles from '../styles/CheckoutStyle';


const steps = ['Shipping address', 'Payment details'];


export const Checkout = ({ cart, onCaptureCheckout, order, error }) => {

    const [ checkoutToken, setCheckoutToken ] = useState(null);
    const [ activeStep, setActiveStep ] = useState(0);
    const [ shippingData, setShippingData ] = useState({});
    const history = useHistory();
    const classes = useStyles();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);

      const test = (data) => {
        setShippingData(data);
    
        nextStep();
      };
    
      let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider/>
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <MDBNavLink to="/"><MDBBtn color="blue-grey">Back to home</MDBBtn></MDBNavLink>
        </>
      ) : (
        <div>
          <CircularProgress />
        </div>
      ));
    
      if (error) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <MDBNavLink to="/"><MDBBtn color="blue-grey">Back to home</MDBBtn></MDBNavLink>
          </>
        );
      }
    
    const Form = () => (
        activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
        : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />
    );

    return (
        <>
          <MDBContainer>
            <Navbar cart={cart}/>
              <CssBaseline />
              <div className={classes.toolbar} />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" align="center">Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
              </main>
          </MDBContainer>

        </>   
    )
}