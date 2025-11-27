import { useRef, useState } from "react";
import DemoBox from "@components/DemoBox";
import "@styles/app-common.css";
import "./GradientText.css";

const GradientText = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on distance from center
    // Normalize to -1 to 1 range
    const rotateY = ((x - centerX) / centerX) * 25; // Max 25deg
    const rotateX = ((centerY - y) / centerY) * 25; // Max 25deg

    setRotation({ x: rotateX, y: rotateY });

    // Update background position for gradient animation
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    textRef.current.style.setProperty("--mouse-x", `${percentX}%`);
    textRef.current.style.setProperty("--mouse-y", `${percentY}%`);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="app-container">
      <DemoBox
        badge="CSS + JS"
        description="Move your cursor over the text to see it warp in 3D space. The gradient follows your pointer position dynamically."
        techniques={[
          { label: "3D transforms with ", code: "perspective(300px)" },
          { label: "Dynamic ", code: "rotateX/rotateY" },
          { label: "CSS gradient with ", code: "background-position" },
          { label: "Mouse tracking with JavaScript" },
        ]}
        techStack={[
          "transform: perspective",
          "background-clip: text",
          "mousemove events",
          "CSS custom properties",
        ]}
      >
        <div
          ref={textRef}
          className="gradient-text-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(300px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <h1 className="gradient-text">WARP</h1>
        </div>
        <p className="showcase-hint">Move your cursor over the text</p>
      </DemoBox>

      {/* Additional Examples */}
      <div className="variants-section">
        <h3 className="variants-title">Different Text Styles</h3>
        <div className="text-grid">
          <div
            className="gradient-text-wrapper interactive"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="gradient-text variant-purple">COSMIC</h2>
          </div>
          <div
            className="gradient-text-wrapper interactive"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="gradient-text variant-sunset">SUNSET</h2>
          </div>
          <div
            className="gradient-text-wrapper interactive"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="gradient-text variant-ocean">OCEAN</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientText;
