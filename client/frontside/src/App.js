



// app.js contains all the routers
//importings componets

import Navbar from "./componets/navbar/Navbar";
import Frontpage from "./componets/frontpage/Frontpage";
import Footer from "./componets/footer/Footer";
import Selectionsproduct from "./componets/products/Selectionsproduct";
import SignIn from "./componets/register&login/SignIn";
import SignUp from "./componets/register&login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './componets/redux/store';
function App() {
  return (
    <div>
       <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/selectedproducts/:productType" element={<Selectionsproduct />} />
          <Route path="/tajhotels/login" element={<SignIn />} />
          <Route path="/tajhotels/register" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
      <ToastContainer />

    </div>
  );
}

export default App;
