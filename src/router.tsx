import { Route, Routes } from "react-router-dom";
import { HomePage } from "./screen/Homepage";
import { AboutPage } from "./screen/AboutPage";
import { ProjectsPage } from "./screen/ProjectPage";
import { SideBar } from "./components/sideBar";





export function Router() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects " element={<ProjectsPage />} />
    </Routes>
  );
}