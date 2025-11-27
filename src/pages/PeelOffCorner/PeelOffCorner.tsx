import DemoBox from "@components/DemoBox";
import "@styles/app-common.css";
import "./PeelOffCorner.css";

const PeelOffCorner = () => {
  return (
    <div className="app-container">
      {/* Demo Box */}
      <DemoBox
        description="Hover over the card to see the corner peel off like real paper. This effect demonstrates advanced CSS layering techniques:"
        techniques={[
          { label: "Triangular corner using ", code: "conic-gradient" },
          {
            label: "Morphing animation with ",
            code: "clip-path: polygon()",
          },
          {
            label: "Realistic stretching shadows with ",
            code: "radial-gradient",
          },
          {
            label: "3D depth using ",
            code: "transform-origin + rotate3d()",
          },
        ]}
        techStack={[
          "conic-gradient",
          "clip-path",
          "transform: rotate3d()",
          "::before / ::after",
        ]}
      >
        <div className="peel-demo-wrapper">
          <div className="demo-box">
            <div className="card">
              <div className="corner-peel"></div>
              <div className="card-content">
                <h2 className="card-heading">Announcement</h2>
                <p className="card-description">
                  Hover over this card to see the corner peel off like real
                  paper. The effect uses pure CSS with conic gradients,
                  clip-path morphing, and realistic shadows.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="showcase-hint">
          Hover over the card to see the peel effect
        </p>
      </DemoBox>

      {/* Additional Examples */}
      <div className="variants-section">
        <h3 className="variants-title">Different Corner Styles</h3>
        <div className="variants-grid">
          {/* Subtle Peel */}
          <div className="demo-box variant-box">
            <div className="card card-subtle">
              <div className="corner-peel corner-subtle"></div>
              <div className="card-content">
                <h4 className="variant-label">Subtle</h4>
                <p className="variant-text">Gentle lift with soft shadow</p>
              </div>
            </div>
          </div>

          {/* Dramatic Peel */}
          <div className="demo-box variant-box">
            <div className="card card-dramatic">
              <div className="corner-peel corner-dramatic"></div>
              <div className="card-content">
                <h4 className="variant-label">Dramatic</h4>
                <p className="variant-text">Bold lift with deep shadow</p>
              </div>
            </div>
          </div>

          {/* Glowing Peel */}
          <div className="demo-box variant-box">
            <div className="card card-glow">
              <div className="corner-peel corner-glow"></div>
              <div className="card-content">
                <h4 className="variant-label">Glowing</h4>
                <p className="variant-text">Backlit effect reveal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeelOffCorner;
