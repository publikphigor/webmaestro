import "./LiquidButton.css";

const LiquidButton = () => {
  return (
    <div className="liquid-button-container">
      {/* SVG Filter for gooey effect */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Demo Box */}
      <div className="demo-box">
        <div className="demo-header">
          <div className="demo-title">
            <span>Playground</span>
          </div>
          <div className="demo-badge">CSS Only</div>
        </div>

        <div className="demo-content">
          <div className="demo-description">
            <p>
              Hover and click to see the liquid effect in action. This button
              uses advanced CSS techniques:
            </p>
            <ul className="technique-list">
              <li>
                <span className="bullet">→</span> Pseudo-elements with{" "}
                <code>mix-blend-mode: screen</code>
              </li>
              <li>
                <span className="bullet">→</span> SVG gooey filter with{" "}
                <code>feGaussianBlur</code>
              </li>
              <li>
                <span className="bullet">→</span> Dynamic <code>clip-path</code>{" "}
                animations
              </li>
              <li>
                <span className="bullet">→</span> Active state with fluid ripple
                effect
              </li>
            </ul>
          </div>

          <div className="button-showcase">
            <button className="liquid-button">
              <span className="button-text">Click Me</span>
            </button>
            <p className="showcase-hint">Hover & click to see the magic</p>
          </div>
        </div>

        <div className="demo-footer">
          <div className="tech-stack">
            <span className="tech-item">clip-path</span>
            <span className="tech-item">filter: blur()</span>
            <span className="tech-item">mix-blend-mode</span>
            <span className="tech-item">pseudo-elements</span>
          </div>
        </div>
      </div>

      {/* Additional Examples */}
      <div className="variants-section">
        <h3 className="variants-title">Color Variations</h3>
        <div className="button-grid">
          <button className="liquid-button variant-purple">
            <span className="button-text">Purple</span>
          </button>
          <button className="liquid-button variant-cyan">
            <span className="button-text">Cyan</span>
          </button>
          <button className="liquid-button variant-orange">
            <span className="button-text">Orange</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquidButton;
