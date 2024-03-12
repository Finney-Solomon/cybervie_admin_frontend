import React, { useEffect, useState } from "react";
import { MainContainerDiv } from "../../components/tableComponent/tableComponent";
import {
  Card,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { leadManagementTableColumn } from "./leadManagementTableColumn";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeAlertBox, getUserLeadData, handleCallStatus, handleStudentStatus, openAlertBox } from "../../redux/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#86868671f",
    color: "#fffff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    size: "small",
    padding: "5px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F1F1F1",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const LeadManagementPage = () => {

  const userLeadsData = useSelector((state) => state.userLeadList);
  //const [userLeadsData, setUserLeadsData] = useState([]);
  const dispatch = useDispatch()

  
  useEffect(() => {

    if (userLeadsData?.length === 0) {
      dispatch(getUserLeadData())
    }
  }, []);

  const confirmCallStatus = (row) => {
    const payload = {
      title: "Student Call Confirmation",
      alertMessage: `Confirm that you have called the User ${row?.name} `,
      onAgree: () => { dispatch(handleCallStatus(row)); dispatch(closeAlertBox()) },
      onDisagree: () => dispatch(closeAlertBox())
    }
    dispatch(openAlertBox(payload));
  }

  const confirmStudentStatus = (data) => {
    const payload = {
      title: "Student Status Confirmation",
      alertMessage: `Confirm the user ${data.row?.name} status for the courses`,
      onAgree: () => { dispatch(handleStudentStatus(data)); dispatch(closeAlertBox()) },
      onDisagree: () => dispatch(closeAlertBox())
    }
    dispatch(openAlertBox(payload));
  }
  return (
    <>
      <>
        <MainContainerDiv>
          <TableContainer
            component={Paper}
            sx={{
              height: "80vh",
              marginTop: "6vh",
            }}
          >
            <Card> </Card>
            <Table sx={{ minWidth: 600 }} aria-label="customized table">
              <TableHead sx={{ padding: "2em" }}>
                <TableRow sx={{ background: "#114084", padding: "2em" }}>
                  {leadManagementTableColumn.map((item) => (
                    <React.Fragment key={item.label}>
                      <StyledTableCell
                        key={item.label}
                        sx={{
                          color: "#F1F1F1",
                          fontFamily: "",
                          fontSize: "1em",
                        }}
                      >
                        {item?.label}
                      </StyledTableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userLeadsData?.map((row, index) => (

                  <StyledTableRow key={index} size="small">
                    <StyledTableCell>{row?.name}</StyledTableCell>
                    <StyledTableCell>{row?.email}</StyledTableCell>
                    <StyledTableCell>{row?.mobile}</StyledTableCell>
                    <StyledTableCell>{row?.date ? new Date(row.date).toLocaleDateString() : ''}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Switch checked={row?.callUser ? true : false} onChange={() => confirmCallStatus(row)} />
                      {row?.callUser}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Select
                        size="small"
                        value={row?.studentStatus}
                        label="userStatus"
                        onChange={(event) => confirmStudentStatus({ event, row })}
                      >
                        <MenuItem value="Interested">Interested</MenuItem>
                        <MenuItem value="NotInterested">
                          Not Interested
                        </MenuItem>
                        <MenuItem value={"OnHold"}>On Hold</MenuItem>
                      </Select>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainContainerDiv>
      </>
    </>
  );
};
