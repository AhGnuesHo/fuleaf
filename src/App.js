import Header from "./Components/Header";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";
import PageFilter from "./Pages/PageFilter";
import Detail from "./Pages/Detail";
import Story from "./Pages/Story";
import Modal from "./Components/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <>
      {/* <Modal></Modal> */}
      <BrowserRouter>
        <ScrollToTop />
        <div className="h-[100%]">
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/plants/" element={<PageFilter />} />
            <Route path="/plants/:detail" element={<Detail />} />
            <Route path="/story" element={<Story />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
