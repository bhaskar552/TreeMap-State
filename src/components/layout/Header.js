import React, { useState } from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography,Drawer, Divider} from '@mui/material'
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import ListIcon from '@mui/icons-material/List';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Header = () => {
    const[mobileOpen,setMobileOpen]=useState(false)
    const handledradwerToggle=()=>{
        setMobileOpen(!mobileOpen)

    }

    const drawer=(
        <Box onClick={handledradwerToggle} sx={{textAlign:"center"}}>
            <Typography color={"#ee9b00"} variant='h6' component="div" sx={{flexGrow:1,my:2}}>
                <DataObjectIcon/>
                State-Summary
            </Typography>
            <Divider/>
             <ul className='mobile-navigation'>
                        <li>
                           <Link to={'/'}>Home</Link> 
                        </li>
                        <li>
                           <Link to={'/menu'}>Menu</Link> 
                        </li>
                        
                    </ul>

        </Box>
    )

  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},}}onClick={handledradwerToggle}>
                    
                    <ListIcon/>

                </IconButton>
            <Typography className='head' color={"#ee9b00"} variant="h6" component={"div"} sx={{flexGrow:1}}>
                <DataObjectIcon/>
                State-Summary</Typography>
                <Box sx={{display:{xs:'none',sm:'block'}}}>
                    <ul className='navigation-menu'>
                        <li>
                           <Link to={'/'}>Home</Link> 
                        </li>
                       
                    </ul>
                </Box>
            </Toolbar>

        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen}
            onClose={handledradwerToggle}
            sx={{display:{xs:'block',sm:'none'},"@ .MuiDrawer-paper":{
                boxSizing:"border-box",
                width:"240px",
            }}}>
                {drawer}

            </Drawer>
             
        </Box>
        <Box>
            <Toolbar/>

        </Box>
        

    </Box>
    </>
    )
}

export default Header