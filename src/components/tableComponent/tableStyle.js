import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   // background: "",
   // color: theme.palette.text.primary,
    fontSize: "1 em",
    fontFamily: "Open Sans",
    fontWeight: 600,
    lineHeight: "1.5em",
    letterSpacing: "0.05em",
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.8 em",
    letterSpacing: "0.05em",
    fontFamily: "Open Sans",
  },
}));

const ActionsTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   // background: theme.palette.primary.tableHead,
   // color: theme.palette.text.primary,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.8 em",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
   // backgroundColor: theme.palette.primary.tableRow,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    fontSize: "0.8em",
    fontFamily: "Open Sans",
    letterSpacing: "0.02em",
  },
}));

export { StyledTableCell, ActionsTableCell, StyledTableRow };
