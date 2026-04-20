// components/FrameCard.tsx - Updated with real photo frame design
import './FrameCard.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  imageColor: string;
  flowerEmoji: string;
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
      <div className="photo-frame">
        <div className="frame-outer-border">
          <div className="frame-inner-border">
            <div className="frame-mat">
              <div 
                className="frame-artwork"
                style={{ backgroundColor: project.imageColor }}
              >
                <div className="artwork-content">
                  <span className="artwork-emoji">{project.flowerEmoji}</span>
                  <span className="artwork-year">✦ {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-label-plaque">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="tech-pills">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameCard;