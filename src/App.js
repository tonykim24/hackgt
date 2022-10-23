import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostListing from "./Pages/PostListing";
import Listing from "./Pages/Listing";
import Listing2 from "./Pages/Listing2";
import "/Users/juseok/sandbox/projects/auctionline/src/Styles/HPStyles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postlisting" element={<PostListing />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing2" element={<Listing2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
