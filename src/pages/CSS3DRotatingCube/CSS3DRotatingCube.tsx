import DemoBox from "@components/DemoBox";
import "@styles/app-common.css";
import "./CSS3DRotatingCube.css";

const CSS3DRotatingCube = () => {
  return (
    <div className="app-container">
      <DemoBox
        badge="CSS Only"
        description="A perspective-perfect 3D cube that rotates continuously. Each face has unique styling. Hover to pause the rotation and explore the cube."
        techniques={[
          {
            label: "3D transforms with ",
            code: "transform-style: preserve-3d",
          },
          {
            label: "Six faces positioned with ",
            code: "translateZ/rotateX/rotateY",
          },
          { label: "Continuous ", code: "@keyframes" },
          { label: "Hover to pause animation" },
        ]}
        techStack={[
          "transform-style: preserve-3d",
          "perspective",
          "rotateX/rotateY/rotateZ",
          "translateZ",
          "@keyframes",
        ]}
      >
        <div className="cube-scene">
          <div className="cube">
            <div className="cube-face cube-face--front">
              <span className="face-label">FRONT</span>
              <div className="face-pattern"></div>
            </div>
            <div className="cube-face cube-face--back">
              <span className="face-label">BACK</span>
              <div className="face-pattern"></div>
            </div>
            <div className="cube-face cube-face--right">
              <span className="face-label">RIGHT</span>
              <div className="face-pattern"></div>
            </div>
            <div className="cube-face cube-face--left">
              <span className="face-label">LEFT</span>
              <div className="face-pattern"></div>
            </div>
            <div className="cube-face cube-face--top">
              <span className="face-label">TOP</span>
              <div className="face-pattern"></div>
            </div>
            <div className="cube-face cube-face--bottom">
              <span className="face-label">BOTTOM</span>
              <div className="face-pattern"></div>
            </div>
          </div>
        </div>
        <p className="showcase-hint">Hover to freeze rotation</p>
      </DemoBox>

      {/* Additional Examples */}
      <div className="variants-section">
        <h3 className="variants-title">Different Rotation Styles</h3>
        <div className="cube-grid">
          {/* Slow rotation */}
          <div className="cube-variant">
            <div className="cube-scene small">
              <div className="cube slow-spin">
                <div className="cube-face cube-face--front variant-neon">
                  <span className="face-label-small">1</span>
                </div>
                <div className="cube-face cube-face--back variant-neon">
                  <span className="face-label-small">2</span>
                </div>
                <div className="cube-face cube-face--right variant-neon">
                  <span className="face-label-small">3</span>
                </div>
                <div className="cube-face cube-face--left variant-neon">
                  <span className="face-label-small">4</span>
                </div>
                <div className="cube-face cube-face--top variant-neon">
                  <span className="face-label-small">5</span>
                </div>
                <div className="cube-face cube-face--bottom variant-neon">
                  <span className="face-label-small">6</span>
                </div>
              </div>
            </div>
            <p className="variant-label">Slow Rotation</p>
          </div>

          {/* Diagonal rotation */}
          <div className="cube-variant">
            <div className="cube-scene small">
              <div className="cube diagonal-spin">
                <div className="cube-face cube-face--front variant-gradient">
                  <span className="face-label-small">▲</span>
                </div>
                <div className="cube-face cube-face--back variant-gradient">
                  <span className="face-label-small">■</span>
                </div>
                <div className="cube-face cube-face--right variant-gradient">
                  <span className="face-label-small">●</span>
                </div>
                <div className="cube-face cube-face--left variant-gradient">
                  <span className="face-label-small">★</span>
                </div>
                <div className="cube-face cube-face--top variant-gradient">
                  <span className="face-label-small">◆</span>
                </div>
                <div className="cube-face cube-face--bottom variant-gradient">
                  <span className="face-label-small">♦</span>
                </div>
              </div>
            </div>
            <p className="variant-label">Diagonal Spin</p>
          </div>

          {/* Tumble rotation */}
          <div className="cube-variant">
            <div className="cube-scene small">
              <div className="cube tumble-spin">
                <div className="cube-face cube-face--front variant-dark">
                  <span className="face-label-small">⚡</span>
                </div>
                <div className="cube-face cube-face--back variant-dark">
                  <span className="face-label-small">❄</span>
                </div>
                <div className="cube-face cube-face--right variant-dark">
                  <span className="face-label-small">☀</span>
                </div>
                <div className="cube-face cube-face--left variant-dark">
                  <span className="face-label-small">☁</span>
                </div>
                <div className="cube-face cube-face--top variant-dark">
                  <span className="face-label-small">✨</span>
                </div>
                <div className="cube-face cube-face--bottom variant-dark">
                  <span className="face-label-small">🌙</span>
                </div>
              </div>
            </div>
            <p className="variant-label">Tumble Motion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSS3DRotatingCube;
