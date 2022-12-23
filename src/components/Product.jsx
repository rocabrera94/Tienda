import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import  { setSingleProduct } from '../store/slices/singleProduct';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { Button, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import { setCart } from '../store/slices/cart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider'; 

const Product = () => {
    const {item} = useSelector(state=>state.singleProduct)
 
    //const {cartProducts} = useSelector(state=>state.cart)
    
    const dispatch = useDispatch()
    
    const {productId} = useParams();
    
    let url = `https://fakestoreapi.com/products/${productId}`
    
    const fetcher = async () => {
        const res = await axios.get(url).catch((err)=> {
            console.log('Error',err)
        })
        dispatch(setSingleProduct(res.data))
    }
    
    useEffect(()=> {
        fetcher();
    },[])  

    const handleBuy = () =>{
        dispatch(setCart(item));
    }
    
    

  return (
    <div >
        <NavBar/>
        <div >{(item.length === 0  || item.id != productId ? <p>Loading...</p>: 
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Card sx={{margin:'10px', width:'60%', padding:'10px'}}>
          <CardMedia
          image={item.image}
          component='img'
          alt={item.title}
          sx={{height:450, width:'98%', objectFit:'contain', alignItems:'center', marginBottom:'50px'}}
          
          />
          <CardContent >
            <Box sx={{display:'flex', marginTop:'20px'}}>
              <Typography sx={{marginRight:'55px'}} variant='h6'>
                 {item.title} 
              </Typography>
              <Typography variant='h6'>
                ${item.price}
              </Typography>
            </Box>
            
            <Box>
            <Divider variant="middle" sx={{width:'90%', margin:'0 0 35px 0'}}/>
            <Box sx={{display:'flex'}}>
              <Rating name="read-only" value={item.rating.rate} readOnly precision={0.20} sx={{marginRight:'15px', padding:'0px', alignItems:'center'}}/>
              <Typography  sx={{alignItems:'center', marginTop:'3px', color:'gray'}}>
                {item.rating.rate}
              </Typography>
            </Box>
            </Box>

            <Box>
            <Divider variant="middle" sx={{width:'90%', marginLeft:'0px'}}/>
            <Typography sx={{marginTop:'15px'}} color='text.secondary'>
              {item.description} 
            </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='contained' onClick={()=>handleBuy()} color='primary'to='/cart' component={RouterLink}>Agregar al carrito</Button>
          </CardActions>  
        </Card>
        </Box>)}</div>
    </div>
  )
}

export default Product