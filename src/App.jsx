import Details from './components/Details/Details';
import Grid from '@mui/material/Grid';
import Main from './components/Main/Main';
import { Box } from '@mui/material';

function App() {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
     <Grid container spacing={2} alignItems='center' justify="center" sx={{ height: '100vh', width: '1200px' }}>
        <Grid item xs={12} sm={4}>
          <Details title="income"/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="expences"/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
