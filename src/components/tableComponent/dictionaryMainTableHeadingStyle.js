const styles = {
  container: {
    border: '1px solid transparent',
    minHeight: '80vh',
  },
  
  mainDiv: {
    margin: 'auto',
    marginTop: '4vh',
    minHeight: '70vh',
  },
  
  headingDiv: {
    height: '46px',
    background:"#ffffff",
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:"2em",
  },
  
  headingDivChild: {
    width: 'fixed', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  headingIcon: {
    fontSize: '30px',
  },
  
  headingText: {
    fontSize: '26px',
    fontWeight: '700',
    paddingBottom: '0.4rem',
    fontFamily: 'Open Sans',
    paddingLeft: '1rem',
  },
  
  formBackgroundParent: {
    overflow: 'hidden',
  },
  
  formBackgroundChild: {
    margin: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px', // Maximum width of scrollbar
  },
};

export default styles;





// import { makeStyles } from "@mui/material";


// export default  makeStyles((theme) => ({
//   container: {
//     border: "1px solid transparent",
//     minHeight: "80vh",
//   },

//   mainDiv: {
//     margin: "auto",
//     marginTop: "4vh",
//     minHeight: "70vh",
//   },
//   headingDiv: {
//     height: "46px",
//     background: theme.palette.primary.subTabHeading,
//     margin: "auto",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: theme.spacing(2, 0),
//   },
//   headingDivChild: {
//     width: "fixed",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   headingIcon: {
//     fontSize: "30px",
//   },
//   headingText: {
//     fontSize: "26px",
//     fontWeight: "700",
//     paddingBottom: "0.4rem",
//     fontFamily: "Open Sans",
//     paddingLeft: "1rem",
//   },
//   formBackgroundParent: {
//     overflow: "hidden",
//   },
//   formBackgroundChild: {
//     margin: "auto",
//     paddingLeft: "20px",
//     paddingRight: "20px" /* Maximum width of scrollbar */,
//   },
// }));
