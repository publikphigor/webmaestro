import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AppLayout from "./components/AppLayout";
import { apps } from "./apps.config";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Mini App Routes */}
        {apps.map((app) => (
          <Route
            key={app.path}
            path={app.path}
            element={
              <AppLayout apps={apps}>
                <div className="max-w-6xl mx-auto px-6">
                  <div className="bg-bg-raised border primary-border rounded-lg p-8 text-center">
                    <p className="text-sm text-sub-text">
                      App component for "{app.name}" coming soon...
                    </p>
                  </div>
                </div>
              </AppLayout>
            }
          />
        ))}

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
