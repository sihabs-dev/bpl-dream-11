import "./App.css";
import Nav from "./components/navbar/nav";
import Banner from "./components/banner/banner";
import AllPlayers from "./components/allPlayers/allPlayers";
import { Suspense, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [coin, setCoin] = useState(1000);
  return (
    <>
      <Nav coin={coin} />
      <Banner />

      <AllPlayers coin={coin} setCoin={setCoin} />
      <ToastContainer />
      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </>
  );
}

export default App;
