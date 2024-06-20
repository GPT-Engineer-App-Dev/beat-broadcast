import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreatePlaylist from "./pages/CreatePlaylist.jsx";
import ViewPlaylists from "./pages/ViewPlaylists.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />
        <Route path="/view-playlists" element={<ViewPlaylists />} />
      </Routes>
    </Router>
  );
}

export default App;
