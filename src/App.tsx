import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { CategoryProvider } from "./contexts/CategoryContext";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <>
      <AuthProvider>
        <CategoryProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<Post />} />
              <Route path="/product" element={<ProductView />} />
            </Routes>
          </Router>
        </CategoryProvider>
      </AuthProvider>
    </>
  );
}

export default App;
