import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
