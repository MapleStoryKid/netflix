import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
 import Header from "./Components/Header";
 import Home from "./Routes/Home";
 import Search from "./Routes/Search";
 import Tv from "./Routes/Tv";

 function App() {

   return (
    <Router>
       <Header />
       <Routes>

         <Route path="/tv" element={<Tv />} />
         <Route path="/search" element={<Search />} />
         <Route path="/" element={<Home />} />
         <Route path="movies/:id" element={< Home />} /> 
         /*노 이해
       </Routes>
     </Router>
   );
 }

 export default App;