import HomePage from "./Components/Pages/Homepage";
import Publication from "./Components/Pages/Publication";
import RootLayout from "./Layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Teams from "./Components/Pages/Teams";
import Projects from "./Components/Pages/Projects";
import Openings from "./Components/Pages/Opening";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="publication" element={<Publication />} />
        <Route path="teams" element={<Teams />} />
        <Route path="projects" element={<Projects />} />
        <Route path="opening" element={<Openings />} />
      </Routes>
    </RootLayout>
  );
}

export default App;