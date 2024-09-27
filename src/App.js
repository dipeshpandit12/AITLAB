import Homepage from "./Components/Pages/Homepage";
import Publication from "./Components/Pages/Publication";
import RootLayout from "./Layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Teams from "./Components/Pages/Teams";

function App() {
  return (
    <RootLayout>
      <Routes>
      <Route path="/" element={<Teams/>} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="publication" element={<Publication />} />
        <Route path="teams" element={<Teams/>} />
      </Routes>
    </RootLayout>
  );
}

export default App;

