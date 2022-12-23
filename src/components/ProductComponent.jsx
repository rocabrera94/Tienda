import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom'
import Divider from '@mui/material/Divider'; 
import Box from '@mui/material/Box'

const ProductComponent = () => {
    
    const {list} = useSelector(state => state.products)
    
    const renderList = list.map((product)=>{
        const {price, title, category, image, id} = product
        
    
    return (
        
            <div key={id}>{list[0] === undefined ? 'loading...': 
              <Card sx={{width:'100%', height:'550px', marginBottom:'15px'}} >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                <CardMedia 
                  component='img'
                  sx={{height:250, width:400, objectFit:'contain', marginTop:'5px', padding:'10px',display:'flex', justifyContent:'center'}}
                  src={image}
                  alt={title}
                  />
                  </Box>
                <CardContent>
                    <Typography gutterBottom variant='h6' component='div'  sx={{textAlign:'center', margin:'10px 10px 10px 10px', width:400, height: 100}}>
                        {title}
                    </Typography>
                    <Divider variant='middle' sx={{marginBottom:'20px'}} ></Divider>
                    <Typography variant='body2' color='text.secondary'>
                        {category} 
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {price}$
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button to={`/:${category}/${id}`} sx={{marginLeft:'20px'}} size='small' color='primary' component={RouterLink} variant='contained'>Ver más</Button> 
                </CardActions>
              </Card> 
               
              } 

            </div>
        
    )  
            })
           
    return <>{renderList}</>         
    
}

export default ProductComponent