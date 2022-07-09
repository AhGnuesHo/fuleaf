import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import PageFilter from "./Pages/PageFilter"
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path ="/plants" element={<PageFilter/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
