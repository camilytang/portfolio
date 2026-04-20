// components/GalleryRoom.tsx - Complete working version
import { useState, useRef } from "react";
import FrameCard from "./FrameCard";
import ProjectModal from "./ProjectModal";
import "./GalleryRoom.css";

interface HeroSection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

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

const projects: Project[] = [
  {
    id: 1,
    title: "Data Bloom Pipeline",
    subtitle: "ETL Analytics Platform",
    description:
      "Real-time data processing pipeline with beautiful visualizations.",
    fullDescription:
      "A robust ETL pipeline that processes streaming data from multiple sources, transforms it, and delivers actionable insights through an elegant dashboard. Built with scalability and data quality at its core.",
    techStack: ["Python", "Apache Spark", "Airflow", "PostgreSQL", "React"],
    githubUrl: "https://github.com/camilytang/data-bloom",
    imageColor: "#FFF0E6",
    flowerEmoji: "📊",
  },
  {
    id: 2,
    title: "Full Stack Garden",
    subtitle: "E-commerce Platform",
    description:
      "Complete full stack application with authentication and payments.",
    fullDescription:
      "A full-featured e-commerce platform for plant lovers. Includes user authentication, product catalog, shopping cart, payment integration, order tracking, and an admin dashboard for inventory management.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/camilytang/fullstack-garden",
    imageColor: "#E8F0FF",
    flowerEmoji: "🌱",
  },
  {
    id: 3,
    title: "Warehouse Whisper",
    subtitle: "Data Warehouse Design",
    description: "Scalable data warehouse solution for business intelligence.",
    fullDescription:
      "Designed and implemented a cloud-based data warehouse using a star schema. Includes automated ETL jobs, data quality checks, and a BI layer with interactive dashboards for stakeholders.",
    techStack: ["Snowflake", "dbt", "AWS", "Tableau", "SQL"],
    githubUrl: "https://github.com/camilytang/warehouse-whisper",
    imageColor: "#FFF5E6",
    flowerEmoji: "🏗️",
  },
  {
    id: 4,
    title: "API Petal",
    subtitle: "RESTful API Service",
    description: "High-performance API with comprehensive documentation.",
    fullDescription:
      "A production-ready RESTful API service with rate limiting, authentication, caching, and comprehensive OpenAPI documentation. Used by multiple frontend applications serving thousands of daily requests.",
    techStack: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Pytest"],
    githubUrl: "https://github.com/camilytang/api-petal",
    imageColor: "#F0E8FF",
    flowerEmoji: "🔌",
  },
  {
    id: 5,
    title: "Stream Weaver",
    subtitle: "Real-time Processing",
    description: "Stream processing system for live data analytics.",
    fullDescription:
      "Real-time data streaming platform that processes millions of events per second. Features include windowed aggregations, anomaly detection, and live dashboards updated in milliseconds.",
    techStack: ["Kafka", "Flink", "Go", "TimescaleDB", "Grafana"],
    githubUrl: "https://github.com/camilytang/stream-weaver",
    imageColor: "#E6FFF0",
    flowerEmoji: "⚡",
  },
  {
    id: 6,
    title: "ML Conservatory",
    subtitle: "ML Pipeline & Deployment",
    description: "End-to-end machine learning pipeline with model serving.",
    fullDescription:
      "Complete ML pipeline including data preprocessing, feature engineering, model training, hyperparameter tuning, and deployment via REST API. Includes monitoring and automated retraining.",
    techStack: ["Python", "TensorFlow", "MLflow", "Kubernetes", "FastAPI"],
    githubUrl: "https://github.com/camilytang/ml-conservatory",
    imageColor: "#FFE8F0",
    flowerEmoji: "🤖",
  },
];

const GalleryRoom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const heroSections: HeroSection[] = [
    {
      id: "about",
      title: "About Me",
      icon: "🌊",
      content: (
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-circle">
              <span className="avatar-emoji">✨</span>
            </div>
          </div>
          <h3>Camily Tang</h3>
          <p className="hero-role">Data Engineer & Full Stack Developer</p>
          <p className="hero-bio">
            I'm passionate about building elegant data solutions and beautiful
            web experiences. With a background in both data engineering and full
            stack development, I bridge the gap between complex data systems and
            user-friendly interfaces.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      icon: "🎨",
      content: (
        <div className="hero-content projects-preview">
          <div className="projects-grid-mini">
            <div className="mini-project">Data Bloom Pipeline</div>
            <div className="mini-project">Full Stack Garden</div>
            <div className="mini-project">Warehouse Whisper</div>
            <div className="mini-project">API Petal</div>
            <div className="mini-project">Stream Weaver</div>
            <div className="mini-project">ML Conservatory</div>
          </div>
          <p className="projects-note">
            ✨ 6+ innovative projects • Scroll down to see detailed frames ✨
          </p>
        </div>
      ),
    },
    {
      id: "skills",
      title: "Skills",
      icon: "⚙️",
      content: (
        <div className="hero-content">
          <div className="skills-category">
            <h4>Data Engineering</h4>
            <div className="skill-tags">
              <span>Python</span>
              <span>Spark</span>
              <span>Airflow</span>
              <span>dbt</span>
              <span>Snowflake</span>
              <span>Kafka</span>
              <span>Flink</span>
              <span>SQL</span>
            </div>
          </div>
          <div className="skills-category">
            <h4>Full Stack</h4>
            <div className="skill-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Next.js</span>
              <span>FastAPI</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>
          <div className="skills-category">
            <h4>Tools & Cloud</h4>
            <div className="skill-tags">
              <span>AWS</span>
              <span>Kubernetes</span>
              <span>Git</span>
              <span>Tableau</span>
              <span>Grafana</span>
              <span>MLflow</span>
              <span>Redis</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      icon: "📮",
      content: (
        <div className="hero-content">
          <p className="contact-text">
            Let's create something beautiful together!
          </p>
          <div className="contact-links">
            <a href="mailto:camily.tang@example.com" className="contact-link">
              📧 camily.tang@example.com
            </a>
            <a href="#" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="#" className="contact-link">
              🐙 GitHub
            </a>
            <a href="#" className="contact-link">
              📱 Twitter
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "blog",
      title: "Blog",
      icon: "📝",
      content: (
        <div className="hero-content">
          <div className="blog-posts">
            <div className="blog-post">
              "Building Scalable Data Pipelines" →
            </div>
            <div className="blog-post">
              "The Art of Full Stack Development" →
            </div>
            <div className="blog-post">
              "Data Visualization Best Practices" →
            </div>
            <div className="blog-post">"From Data to Design" →</div>
          </div>
        </div>
      ),
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: "🏆",
      content: (
        <div className="hero-content">
          <div className="achievement-list">
            <div className="achievement">
              🏅 AWS Certified Solutions Architect
            </div>
            <div className="achievement">
              ⭐ Top 10% in Data Engineering Hackathon 2024
            </div>
            <div className="achievement">📊 Published 5 technical articles</div>
            <div className="achievement">
              🎯 Led migration to cloud data warehouse
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(newIndex, heroSections.length - 1));
    }
  };

  return (
    <div className="gallery-room">
      <div className="wall-paper"></div>
      <div className="floral-wall-stencil"></div>

      {/* Hero Carousel Section */}
      <div className="hero-carousel-container">
        <div className="hero-header">
          <h2 className="hero-greeting">Welcome to My Gallery ✨</h2>
          <div className="hero-indicators">
            {heroSections.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === activeIndex ? "active" : ""}`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: idx * scrollContainerRef.current.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="hero-scroll-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          {heroSections.map((section) => (
            <div key={section.id} className="hero-card">
              <div className="hero-card-inner">
                <div className="hero-icon">{section.icon}</div>
                <h3 className="hero-card-title">{section.title}</h3>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="hero-navigation-hint">
          <span className="hint-text">← drag to explore →</span>
        </div>
      </div>

      {/* Projects Frames Section */}
      <div className="projects-section">
        <div className="section-title">
          <span className="title-decoration">✦</span>
          <h2>Featured Exhibitions</h2>
          <span className="title-decoration">✦</span>
        </div>
        <div className="frames-grid">
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

      <div className="museum-label-strip">
        <span className="museum-label-text">
          ✦ DATA × ART • FULL STACK EXHIBITION ✦
        </span>
        <span className="museum-label-decoration">⚡</span>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default GalleryRoom;
