import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProviderById } from '../services/http';

const ProviderDetails = () => {

  const { id } = useParams();
  const [provider, setProvider] = useState(null);



  useEffect(() => {
    getProviderById(id).then(data => setProvider(data));
  }, [id]);

  console.log(provider);


  return (
    <div>NAME</div>
  )
}

export default ProviderDetails