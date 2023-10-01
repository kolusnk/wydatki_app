import React from 'react'
import { CardHeader, CardContent, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { StyledCard } from '../styled/Card.styled'

function Details({title}) {
  return (
    <StyledCard title={title}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant='h5'>$50</Typography>
            {/* <Doughnut data="DATA"/> */}
        </CardContent>
    </StyledCard>
  )
}

export default Details