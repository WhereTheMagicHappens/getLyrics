import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongDetails from "./pages/SongDetails";
import NotFound from "./pages/NotFound";
import { SongsProvider } from "./context/SongsContext";

const App = () => {
  return (
    <SongsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SongsProvider>
  );
};

export default App;
