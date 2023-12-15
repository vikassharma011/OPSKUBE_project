import React from 'react'
import {Typography , Container , TextField} from "@mui/material"
import { useState } from 'react'
import BookList from './BookLists'
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const cart = useSelector((state) => state.counter.cart);
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

  return (
    <Container>
        <Typography variant='h3' gutterBottom>
            Welcome to your company
        </Typography>
        {/*for searchfield*/}
        <TextField label="Search Books"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}/>
        <Typography variant="h6" gutterBottom>
        Total Cart Price: ${totalCartPrice.toFixed(2)}
      </Typography>
        <BookList searchTerm={searchTerm}/>
    </Container>
  )
}

export default HomeScreen
