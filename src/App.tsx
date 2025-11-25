import { useState } from "react";
import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import Status from "./components/Status";
import { Alphabet } from "./constants";

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

      <section className="flex flex-wrap justify-center">
        {Alphabet.split("").map((letter) => (
          <button
            key={letter}
            className="m-1 flex size-10.5 cursor-pointer items-center justify-center rounded bg-gray-700 text-xl font-semibold text-white capitalize hover:bg-gray-600"
          >
            {letter}
          </button>
        ))}
      </section>

      <button className="mb-8 w-full cursor-pointer rounded bg-blue-600 py-3 text-white hover:bg-blue-500">
        New Game
      </button>
    </main>
  );
}

export default App;
