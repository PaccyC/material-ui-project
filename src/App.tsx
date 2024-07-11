
import { Button } from '@mui/material';
import './App.css';
import SettingsIcon from '@mui/icons-material/Settings'
function App() {
  return (
    <div className="App">
     <Button startIcon={<SettingsIcon/>}  variant='contained' color='secondary'>Contained</Button>
     <Button variant='outlined'>Outlined</Button>
     <Button variant='text'>Text</Button>
    </div>
  );
}

export default App;
