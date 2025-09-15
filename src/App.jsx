import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GlobalTheme from "./theme/GlobalTheme";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <GlobalTheme />
    </>
  );
}

export default App;
