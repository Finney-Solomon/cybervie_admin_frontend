import { Box, IconButton, Paper, TableCell, TableContainer, TableRow, TextField, Typography, tableCellClasses } from "@mui/material";
import styled from "styled-components";




const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "50vh",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));

const ErrorMessageDiv = styled(Box)(({ theme }) => ({
  variant: "h1",
  fontWeight: 700,
  marginLeft: "35%",
  marginTop: "5%",
}));

const MainContainerDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "75%",
  margin: "0px auto",
  alignItems: "center",
  justifyContent: "space-between",
  height: "86.5vh",
  background: "#ffffff",
}));

const LeftSearchDiv = styled(Box)(({ theme }) => ({
  width: "20%",
  minWidth: "250px",
  display: "flex",
  flexDirection: "column",
  height: "98vh",
}));

const BreadCrumDiv = styled(Typography)(({ theme }) => ({
  padding: "10px",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // background: theme.palette.secondary.drawer,
}));

const TextFieldMainDiv = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.drawer,
  height: "87vh",
  padding: "10px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  // backgroundColor: "#fff",
}));

const RightTableDiv = styled(Box)(({ theme }) => ({
  width: "82%",
  height: "86vh",
}));

const PaperDiv = styled(Paper)({
  width: "98%",
  margin: "0 auto",
  height: "84vh",
});

const TableContainerDiv = styled(TableContainer)({
  height: "70vh",
  borderRadius: "4px 4px 0px 0px",
});

const StyledActionTableCell = styled(TableCell)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

const StyledPaginationDiv = styled(Box)({
  display: "flex",
  width: "98%",
  margin: "0 auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const BottomAddIncreseDiv = styled(Box)({
  width: "300px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  position: "absolute",
  right: "2%",
});
const BottomAddIncreseDivClient = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",
  padding: "5px",
  justifyContent: "right",

  right: "2%",
});
const StyledIconButton = styled(IconButton)({
  padding: "0px",
  margin: "0px",
});

const BottomAddButton = styled(Box)({
  width: "100%",
  textAlign: "end",
  marginBottom: "1%",
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export {
  StyledTableCell,
  StyledTableRow,
  StyledPaginationDiv,
  MainContainerDiv,
  LoadingContainer,
  PaperDiv,
  TableContainerDiv,
  BottomAddIncreseDiv,
  ErrorMessageDiv,
  LeftSearchDiv,
  BreadCrumDiv,
  TextFieldMainDiv,
  StyledTextField,
  RightTableDiv,
  StyledActionTableCell,
  StyledIconButton,
  BottomAddIncreseDivClient,
  BottomAddButton,
};
