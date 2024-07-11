import { Notifications, Pets } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'
import logo from '../logo.svg'
import { useState } from "react"
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
 
})

const Search= styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"3px 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))
const Icons= styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:'flex',
  }
}))

const UserBox =styled(Box)(({theme})=>({
 display:"flex",
 gap:"20px",
 alignItems:"center",
 [theme.breakpoints.up("sm")]:{
  display:'none',
} 
}))
const Navbar = () => {

  const [open,setOpen]=useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>

         <Typography 
         variant="h6"
          sx={{
            display:{
              xs: 'none',
              sm: 'block',
            }
          }}>PACCY</Typography>
         <Pets/>
      <Search>
        <InputBase placeholder="Search..."></InputBase>
       </Search>
      <Icons>
      <Badge badgeContent={4} color="error">
       <MailIcon />
      </Badge>
      <Badge badgeContent={2} color="error">
       <Notifications />
      </Badge>
      <Avatar sx={{
        width:30,
        height:30,
        cursor:"pointer",
        
      }} src={logo}
      onClick = {(e)=>setOpen(true)}
      />
    
      </Icons>
      <UserBox>
          <Avatar sx={{
            width:30,
            height:30,
            cursor:"pointer",
            
          }} src={logo}
          onClick = {(e)=>setOpen(true)}/>
          <Typography variant="subtitle1">John </Typography>

      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
