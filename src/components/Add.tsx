import { Fab, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
const Add = () => {
  return (
    <>
      <Tooltip title="Add" >
        <Fab color="primary" aria-label="add">
            <AddIcon/>

        </Fab>
      </Tooltip>
    </>
  )
}

export default Add
