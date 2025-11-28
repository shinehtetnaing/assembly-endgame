import { clsx } from "clsx";
import { useState } from "react";
import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import Status from "./components/Status";
import { Alphabet, Languages } from "./constants";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= Languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const addGuessedLetter = (letter: string) => {
    if (letter && !guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  };

  return (
    <main className="max-w-[450px] space-y-8">
      <Header />

      <Status />

      <LanguageChips wrongGuessCount={wrongGuessCount} />

      <section className="flex items-center justify-center">
        {currentWord.split("").map((letter, index) => (
          <span
            key={index}
            className="bg-word-bg ml-3 flex size-16 items-center justify-center border-b-2 text-3xl capitalize"
          >
            {/* {letter} */}
            {guessedLetters.includes(letter) ? letter : ""}
          </span>
        ))}
      </section>

      <section className="flex flex-wrap justify-center">
        {Alphabet.split("").map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = isGuessed && currentWord.includes(letter);
          const isWrong = isGuessed && !currentWord.includes(letter);
          return (
            <button
              key={letter}
              className={clsx(
                "m-1 flex size-10.5 cursor-pointer items-center justify-center rounded bg-gray-700 text-xl font-semibold text-white capitalize hover:bg-gray-600",
                isCorrect && "bg-green-600 hover:bg-green-500",
                isWrong && "bg-red-600 hover:bg-red-500",
                isGuessed && "cursor-not-allowed! opacity-50",
              )}
              onClick={() => addGuessedLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
      </section>

      {isGameOver && (
        <button className="mb-8 w-full cursor-pointer rounded bg-blue-600 py-3 text-white hover:bg-blue-500">
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
