// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Box display="flex" alignItems="center" my={2}>
            <TextField 
                label="Search..." 
                variant="outlined" 
                value={query} 
                onChange={handleInputChange} 
                fullWidth 
            />
            <Button onClick={handleSearch} variant="contained" color="primary" style={{ marginLeft: '8px' }}>
                Search
            </Button>
        </Box>
    );
}

export default SearchBar;
