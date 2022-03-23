import React from 'react';
import axios from 'axios';

export default props => {
   const { authorId, successCallback } = props;

   const deleteProduct = e => {
      axios.delete('http://localhost:8000/api/author/' + authorId + '/delete')
         .then(res => { successCallback(); })
         .catch(err => console.log(err));
   }

   return <button className="btn btn-sm btn-warning ms-2" onClick={deleteProduct} >Remove</button>
}