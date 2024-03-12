import { Container, Paper } from '@mui/material';
import React from 'react'
import {useStyles} from './mainTableHeading'
export const MainTableHeading = ({
    children,
  headingText,
  headingIcon,
  minHeight = "70vh",
}) => {
    const classes = useStyles();
    return (
      <Container
        maxWidth="xl"
        className={classes.container}
        style={{ minHeight: minHeight }}
      >
        <Paper
          className={classes.mainDiv}
          elevation={4}
          style={{ minHeight: minHeight }}
        >
          <div className={classes.headingDiv}>
            <div className={classes.headingDivChild}>
              {headingIcon}
              <h1 className={classes.headingText}>{headingText}</h1>
            </div>
          </div>
          <br />
          <div className={classes.formBackgroundParent}>
            <div className={classes.formBackgroundChild}>{children}</div>
          </div>
        </Paper>
        <br />
      </Container>
    );
}
