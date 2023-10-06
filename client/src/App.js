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
      <AllRoutes />
      <Footer />
      {/* <img
        src={`data:${services[0]?.image?.mimetype};base64,${arrayBufferToBase64(
          services[0]?.image?.data.data
        )}`}
      /> */}
    </>
  );
}

export default App;
