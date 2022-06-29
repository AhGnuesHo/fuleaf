import Header from "./Components/Header";
import Main from "./Components/Main";
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
    </div>
  );
}

export default App;
