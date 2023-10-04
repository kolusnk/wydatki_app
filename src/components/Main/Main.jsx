import React, { useState, useEffect, useContext } from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@mui/material";
import { ExpenseTrackerContext } from "../../context/context";
import Form from "./Form/Form";
import List from "./List/List";

function Main() {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card>
      <CardHeader title='Expences Tracker' subheader="We'll help you save money" />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: "700" }}>
          ${balance}
        </Typography>
        <Divider sx={{ margin: "10px 0 20px" }} />
        <Form />
      </CardContent>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
