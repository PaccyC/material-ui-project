import { Box } from "@mui/material"

const Rightbar = () => {
  return (
    <Box sx={{
        backgroundColor:"green",
        display:{
            xs: 'none',
            sm: 'block',
        }
    }}
    flex={2}
    p={2}
    >
      Rightbar
    </Box>
  )
}

export default Rightbar
