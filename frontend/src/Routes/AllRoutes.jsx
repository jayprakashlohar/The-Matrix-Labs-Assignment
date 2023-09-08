
import { Route, Routes } from "react-router-dom";
import Token from "../Pages/Token";
import Pair from "../Pages/Pair";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Token />} />
      <Route path="/Pair-Address" element={<Pair />} />
    </Routes>
  );
};

export default AllRoutes;
