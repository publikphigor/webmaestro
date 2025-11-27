import type { ReactNode } from "react";
import "@styles/app-common.css";

interface Technique {
  label: string;
  code?: string;
}

interface DemoBoxProps {
  title?: string;
  badge?: string;
  description: string;
  techniques: Technique[];
  children: ReactNode;
  techStack: string[];
}

const DemoBox = ({
  title = "Playground",
  badge = "CSS Only",
  description,
  techniques,
  children,
  techStack,
}: DemoBoxProps) => {
  return (
    <div className="demo-box">
      <div className="demo-header">
        <div className="demo-title">
          <span>{title}</span>
        </div>
        <div className="demo-badge">{badge}</div>
      </div>

      <div className="demo-content">
        <div className="demo-description">
          <p>{description}</p>
          <ul className="technique-list">
            {techniques.map((technique, idx) => (
              <li key={idx}>
                <span className="bullet">→</span>
                {technique.label}
                {technique.code && <code>{technique.code}</code>}
              </li>
            ))}
          </ul>
        </div>

        <div className="showcase-area">{children}</div>
      </div>

      <div className="demo-footer">
        <div className="tech-stack">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoBox;
