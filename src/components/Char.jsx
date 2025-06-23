"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { speakText } from "../utils/textToSpeech";
import { generateFakeLipSync } from "../utils/fakeLipSync";

export default function Char({ inputText }) {
  const group = useRef();
  const { scene } = useGLTF("../lip_sync.glb");
  const [lipsync, setLipsync] = useState([]);
  const [time, setTime] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!inputText) return;

    const generated = generateFakeLipSync(inputText);
    setLipsync(generated);
    setTime(0);
    setSpeaking(true);

    speakText(inputText, () => setSpeaking(false));
  }, [inputText]);

  useFrame((_, delta) => {
    if (!speaking || lipsync.length === 0 || !scene) return;

    setTime((prev) => prev + delta);
    const mesh = scene.getObjectByName("Wolf3D_Avatar");
    if (!mesh || !mesh.morphTargetDictionary) return;

    const morphDict = mesh.morphTargetDictionary;
    const influences = mesh.morphTargetInfluences;

    for (let i = 0; i < influences.length; i++) influences[i] = 0;

    const current = lipsync.find((v) => time >= v.start && time < v.end);
    if (current && morphDict[`viseme_${current.value}`] !== undefined) {
      influences[morphDict[`viseme_${current.value}`]] = 1;
    }
  });

  return <primitive ref={group} position={[0, -2, 1]} object={scene} scale={1.5} />;
}
