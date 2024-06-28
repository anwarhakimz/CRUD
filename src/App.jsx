import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUserPage from "./pages/listUser";
import AddUserPage from "./pages/addUser";
import EditUserPage from "./pages/editUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListUserPage />} />
        <Route path="/add" element={<AddUserPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
