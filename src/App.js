import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import PageFilter from "./Pages/PageFilter";
import Detail from "./Pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100%]">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/plants/" element={<PageFilter />} />
          <Route path="/plants/:detail" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
