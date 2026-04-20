// components/ProjectModal.tsx
import { useEffect } from 'react';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  imageColor: string;
  flowerEmoji: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-artwork" style={{ backgroundColor: project.imageColor }}>
          <div className="modal-flower-decor">
            <span className="modal-big-flower">{project.flowerEmoji}</span>
            <span className="modal-small-flower">✿</span>
            <span className="modal-small-flower">🌼</span>
          </div>
        </div>
        
        <div className="modal-content">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
          
          <div className="modal-divider">
            <span className="modal-divider-line"></span>
            <span className="modal-divider-flower">🌸</span>
            <span className="modal-divider-line"></span>
          </div>
          
          <p className="modal-description">{project.fullDescription}</p>
          
          <div className="modal-tech-section">
            <h4>Artisan Tools</h4>
            <div className="modal-tech-list">
              {project.techStack.map((tech, i) => (
                <span key={i} className="modal-tech-item">{tech}</span>
              ))}
            </div>
          </div>
          
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="modal-github-btn"
          >
            <span className="btn-icon">📂</span> Visit Exhibition Repository
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;