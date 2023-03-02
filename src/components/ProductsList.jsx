import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProductsList } from '../store/slices/products';
import axios from 'axios'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'


let url = 'https://fakestoreapi.com/products';

const ProductsList = () => {
  
 let dispatch = useDispatch(); 
const fetcher = async () => {
    const res = await axios.get(url,
        {
            mode: 'no-cors',
            credentials: 'include',
            method: 'POST',
            headers:{
            'Access-Control-Allow-Origin': '*',
            }
        }, 
    ).catch((err)=> {
        console.log('Error',err)
    })
    dispatch(setProductsList(res.data))
}

useEffect(()=> {
    fetcher();
},[])
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:  'white',   //.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'grid',

  }));
  return (
      
        <Grid>
          <Item elevation={0}  sx={{display: 'flex', gap:10, justifyContent:'center', alignItems:'center', minWidth:'98vw', flexDirection:'row', flexWrap:'wrap', marginTop:8, padding:0}} >
            <ProductComponent/>
          </Item>  
        </Grid>
      
    
  )
}

export default ProductsList
