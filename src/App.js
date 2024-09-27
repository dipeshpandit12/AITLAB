import Homepage from "./Components/Pages/Homepage";
import Publication from "./Components/Pages/Publication";
import RootLayout from "./Layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Openings from "./Components/Pages/Openings";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="homepage" element={<Homepage />} />
        <Route path="publication" element={<Publication />} />
        <Route path="openings" element={<Openings/>} />
      </Routes>
    </RootLayout>
  );
}

export default App;

