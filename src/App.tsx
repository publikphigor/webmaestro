import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AppLayout from "@components/AppLayout";
import LiquidButton from "./pages/LiquidButton/LiquidButton";
import GradientText from "./pages/GradientText/GradientText";
import CSS3DRotatingCube from "./pages/CSS3DRotatingCube/CSS3DRotatingCube";
import { apps } from "./apps.config";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Mini App Routes */}
        <Route
          path="/css-liquid-button"
          element={
            <AppLayout apps={apps}>
              <LiquidButton />
            </AppLayout>
          }
        />

        <Route
          path="/css-gradient-text-warp"
          element={
            <AppLayout apps={apps}>
              <GradientText />
            </AppLayout>
          }
        />

        <Route
          path="/css-3d-rotating-cube"
          element={
            <AppLayout apps={apps}>
              <CSS3DRotatingCube />
            </AppLayout>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-bg-main flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                <p className="text-sub-text mb-6">Page not found</p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-bg-raised font-semibold text-sm rounded-md hover:bg-[#c5e078] transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
