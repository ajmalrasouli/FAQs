// src/components/CategoryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function CategoryList({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    return (
        <div>
            <Typography variant="h6">Categories</Typography>
            <List>
                {categories.map(category => (
                    <ListItem button key={category.id} onClick={() => onSelectCategory(category.id)}>
                        <ListItemText primary={category.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default CategoryList;
