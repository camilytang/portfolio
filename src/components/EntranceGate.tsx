// components/EntranceGate.tsx
import './EntranceGate.css';

interface EntranceGateProps {
  onEnter: () => void;
}

const EntranceGate = ({ onEnter }: EntranceGateProps) => {
  const handleEnter = () => {
    const gateElement = document.querySelector('.entrance-gate');
    if (gateElement) {
      gateElement.classList.add('fade-out');
      setTimeout(() => {
        onEnter();
      }, 800);
    } else {
      onEnter();
    }
  };

  return (
    <div className="entrance-gate visible">
      <div className="entrance-overlay"></div>
      <div className="floral-decoration left-floral"></div>
      <div className="floral-decoration right-floral"></div>
      <div className="entrance-panel">
        <div className="museum-badge">✦ EST. 2025 ✦</div>
        <h1 className="entrance-title">
          Museum of <span className="highlight">Camily Tang</span>
        </h1>
        <div className="divider">
          <span className="divider-flower">✦</span>
          <span className="divider-line"></span>
          <span className="divider-flower">✦</span>
        </div>
        <p className="entrance-subtitle">
          Data Engineer • Full Stack Developer
        </p>
        <p className="entrance-quote">
          "Where data meets artistry"
        </p>
        <button className="enter-button" onClick={handleEnter}>
          <span className="button-text">Enter Museum</span>
          <span className="button-flower">→</span>
        </button>
        <div className="entrance-footer">
          <span className="footer-flower">✧</span> Virtual Art Exhibition <span className="footer-flower">✧</span>
        </div>
      </div>
    </div>
  );
};

export default EntranceGate;