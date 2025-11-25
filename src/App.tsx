import { useState } from "react";
import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import Status from "./components/Status";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");

  return (
    <main className="max-w-[450px] space-y-8">
      <Header />

      <Status />

      <LanguageChips />

      <section className="flex items-center justify-center">
        {currentWord.split("").map((letter, index) => (
          <span
            key={index}
            className="bg-word-bg ml-3 flex size-16 items-center justify-center border-b-2 text-3xl capitalize"
          >
            {letter}
          </span>
        ))}
      </section>
    </main>
  );
}

export default App;
