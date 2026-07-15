import "./App.css";
import Nav from "./components/navbar/nav";
import Banner from "./components/banner/banner";
import AllPlayers from "./components/allPlayers/allPlayers";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AllPlayers />
      </Suspense>
    </>
  );
}

export default App;
