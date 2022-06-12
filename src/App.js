import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
   return (
      <div>
         <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/*" element={<Home></Home>}></Route>
         </Routes>
      </div>
   );
}

export default App;
