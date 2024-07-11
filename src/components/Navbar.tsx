import { Notifications, Pets } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'
import logo from '../logo.svg'
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
        
      }} src={logo}/>
    
      </Icons>
      <UserBox>
          <Avatar sx={{
            width:30,
            height:30,
            
          }} src={logo}/>
          <Typography variant="subtitle1">John </Typography>

      </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
