import "./App.css";
import Navbar from "./Component/navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { useLocation } from "react-router-dom";
import Footer from "./Component/footer/Footer";

function App() {
  const location = useLocation();
  // const isWhite = location.pathname !== "/" ? true : false;
  const isWhite = true;

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar isWhiteBackground={isWhite} isOfferVisible={!true} /> //isWhite
      )}
      <div className="App">
        <div className="App2">
          <AllRoutes />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
