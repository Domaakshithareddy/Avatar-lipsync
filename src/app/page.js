"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Char from "@/components/Char";

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [finalText, setFinalText] = useState("");

  return (
    <main className="flex flex-col h-screen">
      {/* 3D Avatar Section */}
      <div className="flex-1">
        <Canvas camera={{ position: [0, 1.5, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls />
          <Char inputText={finalText} />
        </Canvas>
      </div>

      {/* Text Input Below */}
      <div className="p-4 border-t bg-white shadow-md">
        <textarea
          className="w-full h-28 p-2 border rounded resize-none text-black"
          placeholder="Enter paragraph..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={() => setFinalText(inputText)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Speak & Animate
        </button>
      </div>
    </main>
  );
}