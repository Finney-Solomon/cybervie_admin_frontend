import { useSelector } from "react-redux";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AlertBox } from "./components/AlertBox";
import { SnackBarNotification } from "./components/SnackBarNotification";

function App() {
  return (
    <div className="App">
      <>
        <HomePage />
      </>
      <SnackBarNotification />
      <AlertBox />
    </div>
  );
}

export default App;
