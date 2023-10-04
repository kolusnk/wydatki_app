import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useTransactions from "../../useTransactions";
import { StyledCard } from "../styled/Card.styled";
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  return (
    <StyledCard title={title}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </StyledCard>
  );
};

export default Details;
