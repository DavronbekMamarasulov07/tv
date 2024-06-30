import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/home/Home';
import NotFound from './routes/404/404';
import SinglePage from "./routes/single_page/Single_Page"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/single-page/:pageId" element={<SinglePage/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App;
