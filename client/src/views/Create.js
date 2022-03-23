import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props => {
   const navigate = useNavigate();
   const [ errors, setErrors ] = useState();

   const createAuthor = author => {
      axios.post('http://localhost:8000/api/author/new', author)
         .then(res => {
            console.log(res);
            navigate('/')
         })
         .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
               errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
         });
   }

   return (
      <div className="container my-4">
         <h1 className="display-5">Favorite Authors:</h1>
         <AuthorForm onSubmitProp={createAuthor} errors={errors} initialName="" />
      </div>
   )
}