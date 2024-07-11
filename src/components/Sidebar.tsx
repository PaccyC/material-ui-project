import { Box } from "@mui/material"

const Sidebar = () => {
  return (
    <Box 
    flex={1}
    p={2}
    sx= {
        {
            backgroundColor:"yellow",
            display:{
                xs: 'none',
                sm: 'block',
            }
        }
    }
    >
      Sidebar
    </Box>
  )
}

export default Sidebar
