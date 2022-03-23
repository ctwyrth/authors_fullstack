import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [ errors, setErrors ] = useState();
   const [ author, setAuthor ] = useState();
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/author/' + id)
         .then(res => {
            setAuthor(res.data);
            setLoaded(true);
         })
         .catch(err => console.log(err));
   }, []);

   const updateAuthor = product => {
      axios.put('http://localhost:8000/api/author/' + id + '/update', product)
         .then(res => navigate('/'))
         .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
               errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
         });
   }

   return(
      <div className="container my-4">
         { loaded &&
            <>
               <AuthorForm onSubmitProp={updateAuthor} errors={errors} initialName={author.name} />
            </>
         }
      </div>
   )
}
