// src/components/OrderDetails.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.counter.orders);
  const order = orders[orderId];

  if (!order) {
    return <Typography variant="h6">Order not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Order Details - #{parseInt(orderId, 10) + 1}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Date: {order.date}
      </Typography>
      <List>
        {order.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.title} secondary={`Price: $${item.price.toFixed(2)}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default OrderDetails;
