import { createTheme } from "@mui/material";


export const theme= createTheme({
    palette:{
        primary:{
            main:"#1760a5",
            light:"skbluee"
        },
        secondary:{
            main:"#15c630"
        }
    },
    shape:{
        borderRadius:5
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    
})