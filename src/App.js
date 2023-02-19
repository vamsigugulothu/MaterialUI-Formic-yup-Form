import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import UserForm from './components/Form';

function App() {
  return (
    <div className="App">
      <Typography sx={{marginTop: "50px"}}>Form</Typography>
      <UserForm/>
    </div>
  );
}

export default App;
