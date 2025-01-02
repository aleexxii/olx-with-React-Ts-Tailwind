import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
