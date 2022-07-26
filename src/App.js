import Header from "./Components/Header";
import Main from "./Pages/Main";
import PageFilter from "./Pages/PageFilter";
import Detail from "./Pages/Detail";
import Story from "./Pages/Story";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/plants/" element={<PageFilter />} />
          <Route path="/plants/:detail" element={<Detail />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
