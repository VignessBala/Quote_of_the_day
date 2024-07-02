import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [author, setAuthor] = useState('');
    const [quotes, setQuotes] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:5000/api/quotes/search?author=${author}`)
            .then(response => setQuotes(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Search Quotes by Author</h1>
            <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Author name"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {quotes.map(quote => (
                    <div key={quote._id}>
                        <p>{quote.text}</p>
                        <p><i>- {quote.author}</i></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
