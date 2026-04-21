// components/FrameCard.tsx
import './FrameCard.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  imageColor: string;
}

interface FrameCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const FrameCard = ({ project, onClick, index }: FrameCardProps) => {
  const animationDelay = `${index * 0.08}s`;
  
  return (
    <div 
      className="frame-card" 
      onClick={onClick}
      style={{ animationDelay }}
    >
      <div className="minimal-photo-frame">
        <div className="frame-artwork" style={{ backgroundColor: project.imageColor }}>
          <div className="artwork-content">
            <span className="artwork-symbol">◆</span>
          </div>
        </div>
        <div className="frame-label">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="tech-pills">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
          <button className="view-btn">view project →</button>
        </div>
      </div>
    </div>
  );
};

export default FrameCard;