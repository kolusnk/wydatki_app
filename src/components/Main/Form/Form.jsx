import React, { useState, useContext, useEffect } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../../../constants/categories";
import dateFormat from "../../../utils/dateFormat";
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
import MySnackbar from "../../Snackbar/Snackbar";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: dateFormat(new Date()),
};

function Form() {
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
    setOpen(true);
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });
    setFormData(initialState);
  };

  const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <MySnackbar open={open} setOpen={setOpen} />
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
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
            {selectedCategories.map((category) => (
              <MenuItem key={category.type} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
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
        <TextField
          fullWidth
          type='date'
          label='Date'
          // value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: dateFormat(e.target.value) })}
        />
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
