import { Box, Fab, Modal, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react";
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
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        Hello
        </Box>
</Modal>
    </>
  )
}

export default Add
