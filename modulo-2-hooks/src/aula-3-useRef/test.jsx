import { useState, useRef } from 'react';

export default function ContadorDeRenders() {
  const [texto, setTexto] = useState("");
  const renders = useRef(0);

  renders.current = renders.current + 1;

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>Este componente renderizou {renders.current} vezes</p>
    </div>
  );
}