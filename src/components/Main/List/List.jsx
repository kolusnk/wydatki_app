import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { ExpenseTrackerContext } from '../../../context/context';



function List() {

  const globalState = useContext(ExpenseTrackerContext);

  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 5200, date: "Mon Oct 02 2023"},
    { id: 2, type: "Expences", category: "Hobby", amount: 125, date: "Wed Sep 18 2023"},
    { id: 3, type: "Expences", category: "Investments", amount: 650, date: "Fri Jan 29 2023"},
  ]; 



  return (
    <MUIList dense={false} sx={{ maxHeight: '150px', overflow: 'auto'}} >
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
                <Avatar sx={{backgroundColor: transaction.type === "Income" ? 'green' : 'red'}}>
                    <MoneyOffIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List