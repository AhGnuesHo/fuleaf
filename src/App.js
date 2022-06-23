import Header from "./Components/Header";
import Content from "./Components/Content";
import Nav from "./Components/Nav";

function App() {

  
  return (
    <>
      <Header></Header>
      <div className = "relative flex row-nowrap h-screen">

      <Nav></Nav>
      <Content></Content>
      </div>
    </>
    
  );
}

export default App;
