import {Route,Routes} from "react-router-dom"
import './index.css';
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";

function Apk() {
  return (<>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Video/:id" element={<Video/>}/>
</Routes>
  </>
  )
}

export default Apk;
