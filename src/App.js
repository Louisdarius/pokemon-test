// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages link
import {
  homePageLink,
  viewPokemonPageLink,
  comparePageLink,
  favouritePageLink,
} from "./config/config";

// Pages list
import Header from "./components/header";
import HomePage from "./pages";
import ComparePage from "./pages/compare";
import FavouritePage from "./pages/favourite";
import ViewPokemonPage from "./pages/viewPokemon";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={homePageLink} element={<HomePage />} exact />
        <Route path={favouritePageLink} element={<FavouritePage />} />
        <Route path={comparePageLink} element={<ComparePage />} />
        <Route path={viewPokemonPageLink} element={<ViewPokemonPage />} />
        {/* <Route path='/editUserInfo' element={<EditUserInfoPage />} />
      <Route path='/deleteAccount' element={<DeleteAccountPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/shipping' element={<ShippingPage />} />
      <Route path='/paymentMethodPage' element={<PaymentMethodPage />} />
      <Route path='/placeOrder' element={<PlaceOrderPage />} />
      <Route path='/topUp' element={<TopUpPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
