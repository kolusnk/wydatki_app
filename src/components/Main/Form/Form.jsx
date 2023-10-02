import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function Form() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value="income">Income</MenuItem>
                    <MenuItem value="expence">Expence</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="hobby">Hobby</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" value={''} fullWidth />
        </Grid>
        <Grid item xs={6}>
            <TextField fullWidth label="Date" type="date" value={''}  />
        </Grid>
        <Grid item xs={12}>
            <Button variant="outlined" color="primary" fullWidth>Create</Button>
        </Grid>
    </Grid>
  )
}

export default Form