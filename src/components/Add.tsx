import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react";
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";


const StyledModal= styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
 
})

const UserBox = styled(Box)({
display:"flex",
alignItems:"center",
gap:"10px",
marginBottom:"20px"
})
const Add = () => {
  const [open,setOpen]=useState<boolean>(false);
  return (
    <>
      <Tooltip title="Add" sx={{position:"fixed", bottom:20,left:{
        xs:"calc(50%) ",
        md:30
      }}}
       onClick={()=>setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
            <AddIcon/>

        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          width={400}
          height={280}
          bgcolor={"background.default"} color={"text.primary"}
          p={3}
          borderRadius={5}

            >
             <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
             <UserBox>

               <Avatar 
                   src="https://www.pexels.com/photo/girl-posing-leaning-on-windowsill-10125613/"
                   sx={{height:30,width:30}}/>
                 <Typography
                   fontWeight={500}
                   variant="subtitle1"
                  >John Doe</Typography>  
             </UserBox>
                  <TextField
                    id="standard-multiline-static"
                   sx={{
                    width:"100%"
                   }}
                   multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                  />

                  <Stack
                    direction="row" gap={3} mt={2} mb={3}>
                      <EmojiEmotions color="primary"/>
                      <Image color="secondary"/>
                      <VideoCameraBack color="success"/>
                      <PersonAdd color="error"/>
                  </Stack>
                  <ButtonGroup 
                      fullWidth
                      variant="contained" 
                      aria-label="Basic button group">
                      <Button>Post</Button>
                      <Button
                        sx={{width:"100px"}}
                      ><DateRange/></Button>
                    
                   </ButtonGroup>
        </Box>
</StyledModal>
    </>
  )
}

export default Add
