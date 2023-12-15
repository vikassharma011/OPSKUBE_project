// src/components/Orders.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = useSelector((state) => state.counter.orders);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Orders
      </Typography>
      <List>
        {orders.map((order, index) => (
          <React.Fragment key={index}>
            <Link to={`/orders/${index}`}> 
            <ListItem  >
              <ListItemText primary={`Order #${index + 1}`} secondary={`Date: ${order.date}`} />
            </ListItem>
            </Link>
           
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Orders;
