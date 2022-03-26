import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default props => {
   const [ authors, setAuthors ] = useState(props.authors);

   // const removeFromDom = authorId => {
   //    setAuthors(authors.filter(author => author._id != authorId));
   // }

   return(
      <div className="container mb-3 text-start">
         <Link to={'/author/new'} className="nav-link">Add an Author</Link>

         { authors &&
            authors.map((author, idx) => { 
               return(
                  <div className="col-4 my-3 mx-auto d-flex align-items-center justify-content-between" key={idx}>
                     <span className="fw-bold">{author.name}</span>
                     <div>
                        <Link to={`/author/${author._id}`} className="btn btn-sm btn-warning">Edit</Link>
                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                     </div>
                  </div>)
               })
         }
      </div>
   )
};
