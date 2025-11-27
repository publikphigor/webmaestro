import DemoBox from "@components/DemoBox";
import "@styles/app-common.css";
import "./LiquidButton.css";

const LiquidButton = () => {
  return (
    <div className="app-container">
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
      <DemoBox
        description="Hover and click to see the liquid effect in action. This button uses advanced CSS techniques:"
        techniques={[
          { label: "Pseudo-elements with ", code: "mix-blend-mode: screen" },
          { label: "SVG gooey filter with ", code: "feGaussianBlur" },
          { label: "Dynamic ", code: "clip-path" },
          { label: "Active state with fluid ripple effect" },
        ]}
        techStack={[
          "clip-path",
          "filter: blur()",
          "mix-blend-mode",
          "pseudo-elements",
        ]}
      >
        <button className="liquid-button">
          <span className="button-text">Click Me</span>
        </button>
        <p className="showcase-hint">Hover & click to see the magic</p>
      </DemoBox>

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
