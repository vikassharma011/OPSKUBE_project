import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/counterSlice';


const Book = ({ title, author, price, description, coverImage }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart({ title, price }));
    };
  return (
    <Card>
      <CardMedia component="img" height="140" image={coverImage} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{author}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="h6" color="primary">${price}</Typography>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Book;
