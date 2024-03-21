// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Typography, Button } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// import GoogleIcon from '@mui/icons-material/Google';
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import useHistory from "use-history";
// const theme = createTheme({
//   typography: {
//     fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
//   },

// });

// export const HomePage = () => {

//   // const handleGoogleSignIn = async () => {
//   //   try {
//   //     // Perform Google sign-in here

//   //     // For demonstration purposes, let's assume successful sign-in
//   //     const googleResponse = { /* response from Google OAuth */ };

//   //     // Make API call to store response
//   //     const response = await axios.get("http://localhost:5001/google");

//   //     // Handle success
//   //     console.log("Response from server:", response.data);

//   //     // You can navigate to a different page or perform other actions here after successful sign-in
//   //   } catch (error) {
//   //     // Handle error
//   //     console.error("Error signing in:", error);
//   //   }
//   // };
//   const dispatch = useDispatch();

//   const handleGoogleSignIn = async () => {
//     try {
//       // Open a new window to initiate Google sign-in
//       const googleSignInWindow = window.open("http://localhost:5001/google", "_self");

//       // Check if the window was successfully opened
//       if (!googleSignInWindow || googleSignInWindow.closed || typeof googleSignInWindow.closed === 'undefined') {
//         throw new Error("Unable to open Google sign-in window. Please ensure your browser allows pop-ups.");
//       }

//       // Listen for messages from the opened window
//       window.addEventListener("message", async (event) => {
//         if (event.origin !== "http://localhost:3000" || event.source !== googleSignInWindow) {
//           return;
//         }

//         // Extract response data from the message
//         const responseData = event.data;

//         // Handle the response
//         if (responseData && responseData.data) {
//           // Extract user ID from the response data and log it
//           const userId = responseData.data.user._id;
//           console.log("User ID:", userId);
//           // Store user data in Redux or handle it as needed
//           // Example: dispatch(setUserData(responseData.data));
//         } else {
//           console.error("Invalid response received from Google sign-in.");
//         }

//         // Close the opened window after handling the response
//         googleSignInWindow.close();
//       });
//     } catch (error) {
//       // Handle error
//       console.error("Error signing in:", error);
//     }
//   };

//   // const history = useHistory(); // Move the useHistory hook inside the functional component

//   // const handleGoogleSignIn = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:5000/google");
//   //     const { success, user } = response.data;
//   //     if (success) {
//   //       console.log("User logged in successfully:", user);
//   //       // Redirect to welcome page after successful login
//   //       // history.push("/welcome");
//   //     } else {
//   //       console.error("Login failed:", response.data.message);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error signing in with Google:", error);
//   //   }
//   // };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container
//         className="homepage-container"
//         style={{
//           padding: "50px",
//           borderRadius: "10px",
//           backgroundColor: "F1F1F1",
//           marginTop: "2rem",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//           }}
//         >
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             style={{ color: "#114084", transition: "color 0.3s" }}
//           >
//             Welcome to Cybervie LMS
//           </Typography>
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             style={{ color: "#3466AA", transition: "color 0.3s" }}
//           >
//             Empowering Cybersecurity Learning
//           </Typography>
//           <Typography
//             variant="body1"
//             gutterBottom
//             style={{ color: "#1C1C1C", transition: "color 0.3s" }}
//           >
//             Redefine your understanding of cybersecurity with our comprehensive
//             Learning Management System (LMS). Gain access to curated courses,
//             hands-on labs, and expert guidance to enhance your cybersecurity
//             skills.
//           </Typography>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             marginTop: "2rem",
//           }}
//         >
//           <Typography
//             variant="h5"
//             component="h3"
//             gutterBottom
//             style={{ color: "#3466AA", transition: "color 0.3s" }}
//           >
//             Elevate Your Cybersecurity Knowledge
//           </Typography>
//           <Typography
//             variant="body1"
//             gutterBottom
//             style={{ color: "#1C1C1C", transition: "color 0.3s" }}
//           >
//             Our platform offers interactive learning experiences tailored to
//             both beginners and seasoned professionals. From fundamentals to
//             advanced topics, we cover it all to help you stay ahead in the
//             rapidly evolving cybersecurity landscape.
//           </Typography>
//           <Typography
//             variant="body1"
//             gutterBottom
//             style={{ color: "#1C1C1C", transition: "color 0.3s" }}
//           >
//             Join our community of learners and unlock endless possibilities in
//             the realm of cybersecurity. Let Cybervie LMS be your trusted
//             companion on your learning journey.
//           </Typography>

//           <Button
//             variant="contained"
//             // color="secondary"
//             component={Link}
//             to="/"
//             style={{ marginTop: "1rem" }}
//           startIcon={<GoogleIcon />}
//           onClick={()=>handleGoogleSignIn()}
//           >
//            Sign in to Learn more          </Button>
//         </div>
//         <br />
//         <hr />
//         <Typography
//           variant="p"
//           component="p"
//           gutterBottom
//           style={{ color: "#1C1C1C", transition: "color 0.3s" }}
//         >
//           Stay Updated with Cybervie Insights
//         </Typography>
//       </Container>
//     </ThemeProvider>
//   );
// };

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../redux/actions";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
});

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

   
    const userId = urlParams.get("userId");
    console.log(urlParams,"urlParams",userId)
    if (userId) {
      dispatch(getUserDetails(userId));
    }
  }, []);

  const handleGoogleSignIn = () => {
    try {
      const googleSignInWindow = window.open(
        "http://localhost:5001/google",
        "_self"
      );
      if (
        !googleSignInWindow ||
        googleSignInWindow.closed ||
        typeof googleSignInWindow.closed === "undefined"
      ) {
        throw new Error(
          "Unable to open Google sign-in window. Please ensure your browser allows pop-ups."
        );
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        className="homepage-container"
        style={{
          padding: "50px",
          borderRadius: "10px",
          backgroundColor: "F1F1F1",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            style={{ color: "#114084", transition: "color 0.3s" }}
          >
            Welcome to Cybervie LMS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={{ color: "#3466AA", transition: "color 0.3s" }}
          >
            Empowering Cybersecurity Learning
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "#1C1C1C", transition: "color 0.3s" }}
          >
            Redefine your understanding of cybersecurity with our comprehensive
            Learning Management System (LMS). Gain access to curated courses,
            hands-on labs, and expert guidance to enhance your cybersecurity
            skills.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            style={{ color: "#3466AA", transition: "color 0.3s" }}
          >
            Elevate Your Cybersecurity Knowledge
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "#1C1C1C", transition: "color 0.3s" }}
          >
            Our platform offers interactive learning experiences tailored to
            both beginners and seasoned professionals. From fundamentals to
            advanced topics, we cover it all to help you stay ahead in the
            rapidly evolving cybersecurity landscape.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "#1C1C1C", transition: "color 0.3s" }}
          >
            Join our community of learners and unlock endless possibilities in
            the realm of cybersecurity. Let Cybervie LMS be your trusted
            companion on your learning journey.
          </Typography>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            style={{ marginTop: "1rem" }}
          >
            Sign in to Learn more
          </Button>
        </div>
        <br />
        <hr />
        <Typography
          variant="p"
          component="p"
          gutterBottom
          style={{ color: "#1C1C1C", transition: "color 0.3s" }}
        >
          Stay Updated with Cybervie Insights
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
