import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </>
  );
}

export default App;
