import { Route, Routes } from "react-router-dom";
import { HomePage } from "./screen/Homepage";
import { AboutPage } from "./screen/AboutPage";
import { ProjectsPage } from "./screen/ProjectPage";
import { Social } from "./components/social"





export function Router() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutPage" element={<AboutPage />} />
      <Route path="/projectsPage" element={<ProjectsPage />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
}