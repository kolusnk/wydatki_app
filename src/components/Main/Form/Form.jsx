import React, { useState, useContext, useEffect } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

function Form() {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4 };
    addTransaction(transaction);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='income'>Income</MenuItem>
            <MenuItem value='expence'>Expence</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <MenuItem value='business'>Business</MenuItem>
            <MenuItem value='hobby'>Hobby</MenuItem>
            <MenuItem value='salary'>Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label='Date' type='date' value={""} />
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' color='primary' onClick={createTransaction} fullWidth>
          Create
        </Button>
      </Grid>
    </Grid>
  );
}

export default Form;
