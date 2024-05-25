import './App.css';
import Router from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fe9100',
    },
    secondary: {
      main: '#e07d00',
    },
    background: {
      default: '#312e37',
      paper: '#292830'
    },
    text: {
      primary: '#fff',
      secondary: '#828282',
      disabled: '#3e3b47'
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#3e3b47',
          }
        }
      }
    }
  }
});

function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
