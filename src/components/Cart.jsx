import { Button, Card, CardContent, CardActions, Box, Typography, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import NavBar from './NavBar'
import {setDeleteCart, setDeleteProduct} from '../store/slices/cart'



const Cart = () => {
    const {cartProducts} = useSelector(state=>state.cart)
    const [items, setItems] = useState(0)
    let dispatch= useDispatch()
    const hancleDeleteCart = () =>{
      dispatch(setDeleteCart());
    }
    let total=0
    let arr=[]
    
     for (let i=0;i<cartProducts.length;i++) {
        total+= cartProducts[i].price
        arr.push(total)   
     }; 
     useEffect(() => {
       setItems(total)      
     }, [])
     
    
  
    const cartItems = cartProducts.map((item)=>{
        const {id, title, price} = item
        
  return (
    <Box sx={{display: 'flex'}}>
      <Typography sx={{marginRight:'10%', width:'40%'}}>
        <p>{title}</p>
      </Typography>
      <Typography sx={{width:'5%'}}>  
        <p>{price}$</p>
      </Typography>
      <CardActions sx={{marginLeft:'18%',  marginTop:'10px', padding:0, alignItems:'flex-start'}}  >  
        <Button sx={{marginTop:0}}variant='contained' color='primary' onClick={()=>dispatch(setDeleteProduct(id))}>Eliminar</Button>
      </CardActions>  
    </Box>
  )
})
   return (
     <>
        <NavBar></NavBar>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexGrow:1}}>
          <Grid container xs={12} sm={10} md={8}  spacing={2} justifyContent='center' alignSelf='center'>
          <Card sx={{padding:'10px'}}>
            <CardContent>
              <div>{cartItems}</div>

              <Box sx={{margin:'50px 0 0 0', padding:'0px', display:'flex', justifyContent:'center', gap:'50px'}} >
                {(cartItems.length>0?
                <Typography justifyContent='center'>
                  <p>Total: {items}$</p> 
                </Typography>:
                <Typography justifyContent='center'> 
                  <p>Total: 0</p>
                </Typography>)}
                <CardActions justifyContent='center'>
                <Button sx={{}} size='small' variant= 'contained' onClick={()=>{hancleDeleteCart()}}>COMPRAR</Button>
              </CardActions>
                </Box>       
            </CardContent>
               
          </Card>
          </Grid>
        </Box>
     </>)
}

export default Cart 