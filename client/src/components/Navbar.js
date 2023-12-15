// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Badge } from '@mui/material';
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) => state.counter.cart.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
        <Link to="/" className='company'>Your Company Name</Link>
        </Typography>
        <Typography>  ----    </Typography>
        <Badge badgeContent={cartCount} color="secondary">
        <Link to="/checkout">
            <ShoppingCartIcon />
          </Link>
        </Badge>
        <Typography>    ----  </Typography>
        <Link to="/orders" className='company' >Orders</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
