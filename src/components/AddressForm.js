import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../lib/commerce';

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();
  const { register, handleSubmit } = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    if (options[0]) {
        setShippingOption(options[0].id);
    }
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const onSubmit = (input) => {
    test({ ...input, shippingCountry, shippingSubdivision, shippingOption })
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <input {...register("firstName")} required name="firstName" placeholder="First name" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input {...register("lastName")} required name="lastName" placeholder="Last name" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input {...register("address1")} required name="address1" placeholder="Address line 1" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input {...register("email")} required name="email" placeholder="Email" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input {...register("city")} required name="city" placeholder="City" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input {...register("zip")} required name="zip" placeholder="Zip / Postal Code" type="text" className="form-control" style={{ backgroundColor: '#000000', color: 'white' }} />
            </Grid>
            
            <Grid item xs={12} sm={6} >
              <InputLabel style={{ color: "#FFFFFF" }}>Select your shipping country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id} style={{ color: "#000000" }}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel style={{ color: "#FFFFFF" }}>Select your shipping state</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id} style={{ color: "#000000" }}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel style={{ color: "#FFFFFF" }}>Select your shipping options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id} style={{ color: "#000000" }}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained" color="blue-grey" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="blue-grey">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
