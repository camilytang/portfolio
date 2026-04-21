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
      }, 600);
    } else {
      onEnter();
    }
  };

  return (
    <div className="entrance-gate visible">
      <div className="entrance-overlay"></div>
      <div className="entrance-panel">
        <div className="museum-badge">EST. 2025</div>
        <h1 className="entrance-title">
          Museum of<br />
          <span className="highlight">Camily Tang</span>
        </h1>
        <div className="divider"></div>
        <p className="entrance-subtitle">
          Data Engineer / Full Stack Developer
        </p>
        <p className="entrance-quote">
          data × artistry
        </p>
        <button className="enter-button" onClick={handleEnter}>
          enter
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default EntranceGate;