export function speakText(text, onEnd) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.onend = onEnd;
  speechSynthesis.speak(utterance);
}
