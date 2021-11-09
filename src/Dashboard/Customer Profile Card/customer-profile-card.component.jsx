import React,{useState,useEffect} from 'react';

import RenderCard from '../RenderCard/reander-card.component';
import axios from 'axios';




const CustomerProfileCard = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
 axios.get('data.json')
 .then(res=> {
    setData(res.data)
 })
 .catch(err=>{
   console.log(err)
 })
  },[])

 
  return (
      
   
   <>
    {data ? <RenderCard data={data}/>   : <div>Sorry No Data Found</div>}
  </>
  
    
  )
}


export default CustomerProfileCard;