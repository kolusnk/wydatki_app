import Card from '@mui/material/Card';
import { styled } from '@mui/system';

const styleIncome = '10px solid rgba(0, 255, 0, 0.5)'
const styleExpences = '10px solid rgba(255, 0, 0, 0.5)'

export const StyledCard = styled(Card)`
    border-bottom: ${(props) => props.title === "income" ? styleIncome : null};
    border-bottom: ${(props) => props.title === "expences" ? styleExpences : null};
`;