import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material'
import Form from './Form/Form'
import List from './List/List'

function Main() {
  return (
    <Card>
        <CardHeader title="Expences Tracker" subheader="We'll help you save money"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Divider sx={{ margin: '10px 0 20px' }}/>
            <Form/>
        </CardContent>
        <CardContent>
          <Grid containter spacing={2}>
            <Grid item xs={12}>
              <List/>
            </Grid>

          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main