import { useState } from 'react';
import Details from './components/Details/Details';
import Grid from '@mui/material/Grid';
import { StyledCard } from './components/styled/Card.styled';
import Main from './components/Main/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
     <Grid container spacing={0} alignItems='center' justify="center" sx={{ height: '100vh' }}>
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
  )
}

export default App
