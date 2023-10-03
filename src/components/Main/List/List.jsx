import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { ExpenseTrackerContext } from "../../../context/context";

function List() {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} sx={{ maxHeight: "150px", overflow: "auto" }}>
      {transactions.map((transaction) => (
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: transaction.type === "Income" ? "green" : "red" }}>
                <MoneyOffIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => deleteTransaction(transaction.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
