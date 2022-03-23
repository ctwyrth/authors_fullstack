import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';

export default props => {
   const [ authors, setAuthors ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/authors')
         .then(response => { setAuthors(response.data); setLoaded(true) })
         .catch(error => console.log(error));
   }, []);

   const removeFromDom = authorId => {
      setAuthors(authors.filter(author => author._id != authorId))
   }

   return (
      <div className="container my-4">
         <h1 className="display-6">Favorite Authors:</h1>
         {loaded && <AuthorList authors={ authors } removeFromDom={ removeFromDom } />}
      </div>
   )
}
