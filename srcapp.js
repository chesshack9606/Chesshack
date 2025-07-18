import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

function App() {
  const [position, setPosition] = useState(new Chess());
  const onAnalyze = async (fen) => {
    const chess = new Chess(fen);
    // Load Stockfish WASM here...
    // Get best move from engine
    const move = "e2e4"; // placeholder
    chess.move(move);
    setPosition(chess);
  };
  const onUpload = (e) => {
    // TODO: image -> FEN
    const fen = "start"; // placeholder
    onAnalyze(fen);
  };
  return (
    <div className="App">
      <h1>ChessHack</h1>
      <input type="file" accept="image/*" onChange={onUpload} />
      <Chessboard position={position.fen()} />
      <button onClick={() => onAnalyze(position.fen())}>Analyze</button>
    </div>
  );
}
export default App;
