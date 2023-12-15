// src/components/Checkout.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { checkout, clearCart } from '../redux/counterSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.counter.cart);

  const handleCheckout = () => {
    dispatch(checkout());
    alert('Checkout successful! Your items have been ordered.');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Checkout
      </Typography>
      {cart.map((item, index) => (
        <div key={index}>
          <Typography>{item.title} - ${item.price.toFixed(2)}</Typography>
        </div>
      ))}
      <Typography variant="h6" gutterBottom>
        Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </Container>
  );
};

export default Checkout;
