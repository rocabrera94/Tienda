import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux/es/exports'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { grid } from '@mui/system';
import { Divider, Box } from '@mui/material';
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'grid',

}));




const Jewelery = () => {
  const {list} = useSelector(state => state.products)
  const jewels = list.filter(item=>item.category === 'jewelery')
      const renderList = jewels.map((product)=>{
        const {price, title, category, image, id} = product
      
        return (
          
          <div key={id}>
              <div >{list[0] === undefined ? 'loading...': 
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
                      <Button to={`${id}`} size='small' color='primary' component={RouterLink} variant='contained' sx={{marginLeft:'20px'}}>VER MÁS</Button> 
                  </CardActions>
                </Card> 
                
                } 
  
              </div>
          </div>
          
      )  
              })
  return (
    <div>
      <NavBar></NavBar>
      <Grid item xs={1} sm={1} lg={4}>
        <Item elevation={0} item sx={{display: 'flex', gap:10, justifyContent:'center', alignItems:'center', minWidth:'98vw', flexDirection:'row', flexWrap:'wrap', marginTop:8, padding:0}}>
          {renderList}   
        </Item>
      </Grid> 
    </div>
  )
}

export default Jewelery