import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboardPage/dashboard";
import AddProduct from "./pages/addProductPages/addProduct-1";
import ProductDetail from "./pages/productDetailPage/productDetail";
import ProductOffer from "./pages/productOfferPage/productOffer";
import AddBank from "./pages/addBankPage/addBank";
import BankList from "./pages/bankListPage/bankList";
import UserList from "./pages/userPage/userList";
import AddUser from "./pages/userPage/addUser";
import ApplicationList from "./pages/applicationPage/applicationList";
import ReferalList from "./pages/referalPage/referalList";
import OfferList from "./pages/productOfferPage/offerList";
import DetailedOffersView from "./pages/productOfferPage/detailedOfferView";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* BrowserRouter should be the top-level component */}
      <div className="main-container">
        <Routes>
          {" "}
          {/* Routes is the component that holds all your routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-list" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-offer" element={<ProductOffer />} />
          <Route path="/add-bank" element={<AddBank />} />
          <Route path="/bank-list" element={<BankList />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/application-list" element={<ApplicationList />} />
          <Route path="/referal-list" element={<ReferalList />} />
          <Route path="/offer-list" element={<OfferList />} />
          <Route path="/detailed-offer" element={<DetailedOffersView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
