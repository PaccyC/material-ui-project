
import { Button, styled } from '@mui/material';
import './App.css';
import SettingsIcon from '@mui/icons-material/Settings'
function App() {

  const BlueButton=styled(Button)({
    backgroundColor:"skyblue",
    color:"#888",
    margin:5,
    
  })
  return (
    <div className="App">
     <Button 
        startIcon={<SettingsIcon/>}  
        variant='contained' 
        color='secondary'
        sx={{
          backgroundColor: 'primary',
        }}>Contained</Button>
     <Button variant='outlined'>Outlined</Button>
     <Button variant='text'>Text</Button>
     <BlueButton>One Button</BlueButton>
     <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
