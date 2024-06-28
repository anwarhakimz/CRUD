import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUserPage from "./pages/listUser";
import AddUserPage from "./pages/addUser";
import EditUserPage from "./pages/editUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CRUD/add" element={<ListUserPage />} />
        <Route path="/CRUD/add" element={<AddUserPage />} />
        <Route path="/CRUD/edit/:id" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
