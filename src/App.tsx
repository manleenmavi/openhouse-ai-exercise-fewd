import "./App.css";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/Home/HomeContent";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="">
        
        <HomeContent />
       
      </div>

      <Footer />
    </>
  );
}

export default App;
