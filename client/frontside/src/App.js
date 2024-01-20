



// app.js contains all the routers
//importings componets

import Navbar from "./componets/navbar/Navbar";
import Frontpage from "./componets/frontpage/Frontpage";
import Footer from "./componets/footer/Footer";
import Selectionsproduct from "./componets/products/Selectionsproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/selectedproducts/:productType" element={<Selectionsproduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
