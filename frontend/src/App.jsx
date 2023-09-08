import "./App.css";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <Box
     className="app"
     
      height={"100vh"}
      color={"#fff"}
    >
      <Box background={"rgba(0, 0, 0, 0.749)"} height={"100vh"}>
        <Sidebar />
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
