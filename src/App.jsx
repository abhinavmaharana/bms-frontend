import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MoviePage from "./pages/movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<MoviePage />} />
    </Routes>
  );
}

export default App;
