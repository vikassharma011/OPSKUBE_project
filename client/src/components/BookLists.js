// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Book from './Book';

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/subjects/fiction.json?limit=10`);
        const data = await response.json();
        setBooks(data.works || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.authors && book.authors[0].name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Grid container spacing={3}>
      {filteredBooks.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Book
            title={book.title}
            author={book.authors ? book.authors[0].name : 'Unknown Author'}
            price={Math.random() * 30} // Placeholder price
            description={book.subjects ? book.subjects.join(', ') : 'No description'}
            coverImage={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
