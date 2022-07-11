import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import PageFilter from "./Pages/PageFilter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
      <div className="h-[100%] pb-[1200px]">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plants" element={<PageFilter />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
