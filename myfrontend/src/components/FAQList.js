// src/components/FAQList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function FAQList({ searchQuery }) {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8000/faqs/';
        if (searchQuery) {
            url += `?search=${searchQuery}`;
        }

        axios.get(url)
            .then(response => {
                setFaqs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the FAQs!', error);
            });
    }, [searchQuery]);

    return (
        <div>
            <Typography variant="h6">FAQs</Typography>
            <List>
                {faqs.map(faq => (
                    <ListItem key={faq.id}>
                        <ListItemText 
                            primary={faq.question} 
                            secondary={faq.answer} 
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default FAQList;
