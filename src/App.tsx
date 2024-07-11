
import { Box, Stack } from '@mui/material';
import './App.css';

import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
function App() {

  
  return (
    <Box >
      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="space-between">

        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
