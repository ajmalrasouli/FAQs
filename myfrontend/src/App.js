// src/App.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import CategoryList from './components/CategoryList';
import ArticleList from './components/ArticleList';
import FAQList from './components/FAQList';
import SearchBar from './components/SearchBar';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Self-Service Portal
            </Typography>
            <SearchBar onSearch={handleSearch} />
            <CategoryList onSelectCategory={setSelectedCategory} />
            {selectedCategory && <ArticleList categoryId={selectedCategory} searchQuery={searchQuery} />}
            <FAQList searchQuery={searchQuery} />
        </Container>
    );
}

export default App;
