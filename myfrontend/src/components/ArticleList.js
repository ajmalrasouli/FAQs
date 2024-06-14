// src/components/ArticleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function ArticleList({ categoryId, searchQuery }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8000/articles/';
        if (categoryId) {
            url += `?category=${categoryId}`;
        }
        if (searchQuery) {
            url += `&search=${searchQuery}`;
        }

        axios.get(url)
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the articles!', error);
            });
    }, [categoryId, searchQuery]);

    return (
        <div>
            <Typography variant="h6">Articles</Typography>
            <List>
                {articles.map(article => (
                    <ListItem key={article.id}>
                        <ListItemText 
                            primary={article.title} 
                            secondary={article.content} 
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default ArticleList;
