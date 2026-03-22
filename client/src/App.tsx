import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    async function testBE() {
      const res = await fetch(`${API_URL}/hello`);
      const data = await res.text();
      console.log(data); // vidiš u browser konzoli
    }

    testBE();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1>Hello FE 👋</h1>
    </div>
  );
}

export default App;