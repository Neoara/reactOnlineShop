import MainPage from "./Components/MainPage";
import CommentPage from "./Components/CommentPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./globalStyle.css"
import Header from "./Components/Header";

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/cart' element={<CommentPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;