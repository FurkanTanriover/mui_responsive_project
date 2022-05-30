import { createTheme, PaletteMode, Stack, ThemeOptions, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { Mode } from 'fs';
import { useState } from 'react';
import { text } from 'stream/consumers';
import './App.css';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState("light");
  const theme=createTheme ({
    palette:{
      mode:mode as PaletteMode
    }
  })

  function MySideBar(setMode:any,mode:any){
    return <Sidebar mode={mode} setMode={setMode}/>;
  }

  return (
      <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack direction={"row"} justifyContent={"center"} spacing={1}>
            <MySideBar setMode={setMode} mode={mode}/>
            <Feed/>
            <Rightbar/>
          </Stack>
          <Add/>
        </Box>
      </ThemeProvider>
  );
}

export default App;
