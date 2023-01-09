import { Route, Routes } from "react-router-dom";
import { HomePage } from "./screen/Homepage";





export function Router() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}