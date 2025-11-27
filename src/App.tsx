interface App {
  name: string;
  path: string;
  description: string;
  tags: string[];
}

const App = () => {
  const apps: App[] = [
    // Mini apps will be added here
    // { name: "App Name", path: "/app-name", description: "Description of the CSS/JS trick", tags: ["css", "animation"] }
  ];

  return (
    <div className="min-h-screen bg-bg-main">
      {/* Navigation */}
      <nav className="border-b primary-border">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-base font-bold tracking-tight">
                <span className="text-primary">Web</span>
                <span className="text-white">Maestro</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#apps"
                className="text-xs hover:text-white transition-colors"
              >
                Apps
              </a>
              <a
                href="#about"
                className="text-xs hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-raised border border-gray-800 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              <span className="text-xs">Exploring the unexplored</span>
            </div>

            <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
              Uncommon CSS & JavaScript
              <br />
              <span className="text-primary">Tricks & Techniques</span>
            </h1>

            <p className="text-base mb-8 leading-relaxed max-w-xl">
              A curated collection of mini applications showcasing powerful but
              lesser-known CSS and JavaScript techniques. Each app demonstrates
              a unique approach to solving common web development challenges.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-bg-raised font-semibold text-sm rounded-md hover:bg-[#c5e078] transition-colors"
              >
                Explore Apps
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-3 text-xs text-sub-text">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white">
                    {apps.length}
                  </span>
                  <span>Apps</span>
                </div>
                <span className="text-sub-text">•</span>
                <span>No frameworks required</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y primary-border bg-bg-raised/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs text-sub-text mb-1.5">Pure CSS/JS</div>
              <div className="text-sm text-sub-text">
                No heavy dependencies, just pure web technologies
              </div>
            </div>
            <div>
              <div className="text-xs text-sub-text mb-1.5">Educational</div>
              <div className="text-sm text-sub-text">
                Learn techniques you won't find in typical tutorials
              </div>
            </div>
            <div>
              <div className="text-xs text-sub-text mb-1.5">Open Source</div>
              <div className="text-sm text-sub-text">
                View source code and adapt for your projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-white">
              Mini Applications
            </h2>
            <p className="text-sm text-sub-text">
              Each app demonstrates a unique technique with clean, readable code
            </p>
          </div>

          {apps.length === 0 ? (
            <div className="bg-bg-raised border primary-border rounded-lg p-12 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">No apps yet</h3>
              <p className="text-sm text-sub-text mb-6">
                Start building your first mini app to showcase unique CSS & JS
                tricks
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-sub-text">
                <span className="w-1 h-1 bg-sub-text rounded-full"></span>
                <span>Apps will appear here automatically</span>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              {apps.map((app, index) => (
                <a
                  key={index}
                  href={app.path}
                  className="group bg-bg-raised border primary-border hover:border-gray-700 rounded-lg p-6 transition-all hover:translate-x-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                          {app.name}
                        </h3>
                        {app.tags && (
                          <div className="flex items-center gap-1.5">
                            {app.tags.map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-sub-text leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                    <div className="text-sub-text group-hover:text-primary transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t primary-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                About This Project
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                WebMaestro is a showcase of unconventional web development
                techniques that often go unnoticed. While most developers reach
                for the same popular libraries and patterns, there's a wealth of
                powerful CSS and JavaScript capabilities hiding in plain sight.
              </p>
              <p className="text-sm leading-relaxed">
                Each mini application here isolates a specific technique, making
                it easy to understand, experiment with, and adapt to your own
                projects.
              </p>
            </div>
            <div className="bg-bg-raised border primary-border rounded-lg p-8">
              <h3 className="text-base font-semibold mb-4 text-white">
                Tech Stack
              </h3>
              <div className="space-y-3">
                {[
                  { name: "React 19", desc: "UI framework" },
                  { name: "TypeScript", desc: "Type safety" },
                  { name: "Vite", desc: "Build tool" },
                  { name: "Tailwind CSS", desc: "Landing page only" },
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-white">{tech.name}</span>
                    <span className="text-xs text-sub-text">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t primary-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <span className="text-xs text-sub-text">
                Built with React, TypeScript, and Vite
              </span>
            </div>
            <div className="text-xs text-sub-text">
              {new Date().getFullYear()} WebMaestro
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
