import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import ResumePage from '../pages/ResumePage.jsx';
import AnalysisPage from '../pages/AnalysisPage.jsx';
import SkillGapPage from '../pages/SkillGapPage.jsx';
import RoadmapPage from '../pages/RoadmapPage.jsx';
import AiAssistantPage from '../pages/AiAssistantPage.jsx';

// AppRoutes defines which page shows for each URL path.
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/skill-gap" element={<SkillGapPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/assistant" element={<AiAssistantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
