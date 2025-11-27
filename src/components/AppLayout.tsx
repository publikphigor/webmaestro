import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface App {
  name: string;
  path: string;
  description: string;
  tags: string[];
}

interface AppLayoutProps {
  children: ReactNode;
  apps: App[];
}

const AppLayout = ({ children, apps }: AppLayoutProps) => {
  const location = useLocation();
  const currentApp = apps.find((app) => app.path === location.pathname);

  // Get related apps (exclude current app, limit to 3)
  const relatedApps = apps
    .filter((app) => app.path !== location.pathname)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bg-main flex flex-col">
      {/* Header */}
      <header className="border-b primary-border sticky top-0 bg-bg-main/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-base font-bold tracking-tight">
                <span className="text-primary">Web</span>
                <span className="text-white">Maestro</span>
              </span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-sub-text hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {currentApp && (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2 text-white">
                {currentApp.name}
              </h1>
              <p className="text-sm text-sub-text">{currentApp.description}</p>
              {currentApp.tags && (
                <div className="flex items-center gap-2 mt-3">
                  {currentApp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {children}
      </main>

      {/* Related Apps Section */}
      {relatedApps.length > 0 && (
        <section className="border-t primary-border py-12 bg-bg-raised/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-lg font-semibold mb-6 text-white">
              Related Apps
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedApps.map((app, index) => (
                <Link
                  key={index}
                  to={app.path}
                  className="group bg-bg-raised border primary-border hover:border-gray-700 rounded-lg p-5 transition-all hover:-translate-y-1"
                >
                  <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors mb-2">
                    {app.name}
                  </h3>
                  <p className="text-xs text-sub-text leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                  {app.tags && (
                    <div className="flex items-center gap-1.5 mt-3">
                      {app.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t primary-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <span className="text-xs text-sub-text">
                Built with React, TypeScript, and Vite
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-xs text-sub-text hover:text-white transition-colors"
              >
                All Apps
              </Link>
              <span className="text-xs text-sub-text">
                {new Date().getFullYear()} WebMaestro
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
