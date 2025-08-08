import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Route,Routes } from "react-router-dom";

function App(){
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </>
  )
}

export default App;