import { AccountBox, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"

const Sidebar = () => {
  return (
    <Box 

    flex={1}
    p={2}
    sx= {
        {
            
            display:{
                xs: 'none',
                sm: 'block',
            }
        }
    }
   
    >
      <Box  position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
             <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
      </Box>

        
    </Box>
  )
}

export default Sidebar
