// components/GalleryRoom.tsx
import { useState } from 'react';
import FrameCard from './FrameCard';
import ProjectModal from './ProjectModal';
import './GalleryRoom.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  imageColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Data Bloom Pipeline",
    subtitle: "ETL Analytics Platform",
    description: "Real-time data processing pipeline with elegant visualizations.",
    fullDescription: "A robust ETL pipeline that processes streaming data from multiple sources, transforms it, and delivers actionable insights through an elegant dashboard. Built with scalability and data quality at its core.",
    techStack: ["Python", "Apache Spark", "Airflow", "dbt", "Snowflake", "PostgreSQL", "React"],
    githubUrl: "https://github.com/camilytang/data-bloom",
    imageColor: "#F5F5F5"
  },
  {
    id: 2,
    title: "Full Stack Garden",
    subtitle: "E-commerce Platform",
    description: "Complete full stack application with authentication and payments.",
    fullDescription: "A full-featured e-commerce platform. Includes user authentication, product catalog, shopping cart, payment integration, order tracking, and an admin dashboard for inventory management.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/camilytang/fullstack-garden",
    imageColor: "#F5F5F5"
  },
  {
    id: 3,
    title: "Warehouse Whisper",
    subtitle: "Data Warehouse Design",
    description: "Scalable data warehouse solution for business intelligence.",
    fullDescription: "Designed and implemented a cloud-based data warehouse using a star schema. Includes automated ETL jobs, data quality checks, and a BI layer with interactive dashboards.",
    techStack: ["Snowflake", "dbt", "AWS", "Tableau", "SQL"],
    githubUrl: "https://github.com/camilytang/warehouse-whisper",
    imageColor: "#F5F5F5"
  },
  {
    id: 4,
    title: "API Petal",
    subtitle: "RESTful API Service",
    description: "High-performance API with comprehensive documentation.",
    fullDescription: "A production-ready RESTful API service with rate limiting, authentication, caching, and comprehensive OpenAPI documentation.",
    techStack: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Pytest"],
    githubUrl: "https://github.com/camilytang/api-petal",
    imageColor: "#F5F5F5"
  },
  {
    id: 5,
    title: "Stream Weaver",
    subtitle: "Real-time Processing",
    description: "Stream processing system for live data analytics.",
    fullDescription: "Real-time data streaming platform that processes millions of events per second. Features include windowed aggregations, anomaly detection, and live dashboards.",
    techStack: ["Kafka", "Flink", "Go", "TimescaleDB", "Grafana"],
    githubUrl: "https://github.com/camilytang/stream-weaver",
    imageColor: "#F5F5F5"
  },
  {
    id: 6,
    title: "ML Conservatory",
    subtitle: "ML Pipeline & Deployment",
    description: "End-to-end machine learning pipeline with model serving.",
    fullDescription: "Complete ML pipeline including data preprocessing, feature engineering, model training, hyperparameter tuning, and deployment via REST API.",
    techStack: ["Python", "TensorFlow", "MLflow", "Kubernetes", "FastAPI"],
    githubUrl: "https://github.com/camilytang/ml-conservatory",
    imageColor: "#F5F5F5"
  }
];

const heroSections = [
  { id: 'about', title: 'about', label: 'me' },
  { id: 'projects', title: 'work', label: 'projects' },
  { id: 'skills', title: 'craft', label: 'skills' },
  { id: 'achievements', title: 'honors', label: 'achievements' },
  { id: 'contact', title: 'connect', label: 'contact' }
];

const GalleryRoom = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : heroSections.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < heroSections.length - 1 ? prev + 1 : 0));
  };

  const currentSection = heroSections[activeIndex].id;

  const getPosition = (idx: number) => {
    const center = activeIndex;
    const diff = idx - center;
    
    if (diff === 0) return { scale: 1.2, opacity: 1, zIndex: 10 };
    if (diff === -1 || diff === 1) return { scale: 0.9, opacity: 0.5, zIndex: 5 };
    return { scale: 0.7, opacity: 0.2, zIndex: 1 };
  };

  return (
    <div className="gallery-room">
      <div className="wall-paper"></div>
      
      <div className="carousel-container">
        <button className="carousel-nav prev" onClick={handlePrev}>←</button>
        
        <div className="carousel-track">
          {heroSections.map((section, idx) => {
            const position = getPosition(idx);
            return (
              <div
                key={section.id}
                className={`carousel-frame ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `scale(${position.scale})`,
                  opacity: position.opacity,
                  zIndex: position.zIndex
                }}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="minimal-frame">
                  <div className="minimal-frame-content">
                    <h3 className="minimal-frame-title">{section.title}</h3>
                    <div className="minimal-frame-label">{section.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="carousel-nav next" onClick={handleNext}>→</button>
      </div>

      <div className="bottom-content-full">
        {currentSection === 'about' && (
          <div className="minimal-content-card">
            <div className="minimal-content-inner">
              <h2 className="minimal-title">about me</h2>
              <div className="minimal-divider"></div>
              <div className="about-wrapper">
                <h3>Camily Tang</h3>
                <p className="about-role">Data Engineer / Full Stack Developer</p>
                <p className="about-text">
                  I'm passionate about building elegant data solutions and beautiful web experiences. 
                  With a background in both data engineering and full stack development, I bridge the gap 
                  between complex data systems and user-friendly interfaces.
                </p>
                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'projects' && (
          <div className="minimal-content-card">
            <div className="minimal-content-inner">
              <h2 className="minimal-title">featured work</h2>
              <div className="minimal-divider"></div>
              <div className="projects-grid-full">
                {projects.map((project, index) => (
                  <FrameCard
                    key={project.id}
                    project={project}
                    onClick={() => openModal(project)}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {currentSection === 'skills' && (
          <div className="minimal-content-card">
            <div className="minimal-content-inner">
              <h2 className="minimal-title">technical craft</h2>
              <div className="minimal-divider"></div>
              <div className="skills-wrapper">
                <div className="skill-group">
                  <h4>Data Engineering</h4>
                  <div className="skill-bubbles">
                    {["Python", "Spark", "Airflow", "dbt", "Snowflake", "Kafka", "SQL"].map(s => (
                      <span key={s} className="skill-bubble">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Full Stack</h4>
                  <div className="skill-bubbles">
                    {["React", "TypeScript", "Node.js", "Next.js", "FastAPI", "MongoDB", "PostgreSQL"].map(s => (
                      <span key={s} className="skill-bubble">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Cloud & Tools</h4>
                  <div className="skill-bubbles">
                    {["AWS", "Docker", "K8s", "Git", "Tableau", "Grafana", "Redis"].map(s => (
                      <span key={s} className="skill-bubble">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'achievements' && (
          <div className="minimal-content-card">
            <div className="minimal-content-inner">
              <h2 className="minimal-title">recognition</h2>
              <div className="minimal-divider"></div>
              <div className="achievements-wrapper">
                {[
                  "AWS Certified Solutions Architect",
                  "Top 10% in Data Engineering Hackathon 2024",
                  "Published 5 technical articles",
                  "Led migration to cloud data warehouse",
                  "Optimized ETL pipelines reducing costs by 30%"
                ].map((achievement, i) => (
                  <div key={i} className="achievement-row">
                    <span className="achievement-bullet">—</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentSection === 'contact' && (
          <div className="minimal-content-card">
            <div className="minimal-content-inner">
              <h2 className="minimal-title">connect</h2>
              <div className="minimal-divider"></div>
              <p className="contact-text">Let's create something meaningful together.</p>
              <div className="contact-links">
                <a href="#" className="contact-link-minimal">email</a>
                <a href="#" className="contact-link-minimal">linkedin</a>
                <a href="#" className="contact-link-minimal">github</a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="museum-label-strip">
        <span>data × artistry — full stack exhibition</span>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default GalleryRoom;