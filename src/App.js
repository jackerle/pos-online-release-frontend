
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReleaseList from './view/ReleaseList';




const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"A7Font"`,
    "fontSize": 20,
  },
  palette: {
    primary: {
      main: '#D63135'
    },
    secondary: {
      main: '#F3F8FE'
    }
  },
});


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        <Switch>
          {
            <Route path='/' >
              <ReleaseList/>
            </Route>
          }
        </Switch>
      </MuiThemeProvider>
  
    </div>
  );
}

export default App;
