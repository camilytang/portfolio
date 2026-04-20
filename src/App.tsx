// App.tsx
import { useState } from 'react';
import EntranceGate from './components/EntranceGate';
import GalleryRoom from './components/GalleryRoom';
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="app">
      {!hasEntered ? (
        <EntranceGate onEnter={handleEnter} />
      ) : (
        <GalleryRoom />
      )}
    </div>
  );
}

export default App;