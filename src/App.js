import HomePage from "./Components/Pages/Homepage";
import Publication from "./Components/Pages/Publication";
import RootLayout from "./Layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Teams from "./Components/Pages/Teams";
import Projects from "./Components/Pages/Projects";
import Openings from "./Components/Pages/Opening";
import Talk from "./Components/Pages/Talk";
import AboutMe from "./Components/Pages/About";

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
        <Route path="talks" element={<Talk />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
    </RootLayout>
  );
}

export default App;