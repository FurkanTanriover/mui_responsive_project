import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction={"row"} justifyContent={"center"} spacing={1}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
