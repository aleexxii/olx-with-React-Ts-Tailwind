import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { CategoryProvider } from "./contexts/CategoryContext";
import ProductView from "./pages/ProductView";
import { ProductProvider } from "./contexts/ProductProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/product-view/:id" element={<ProductView />} />
              </Routes>
            </Router>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
