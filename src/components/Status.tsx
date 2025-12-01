import { clsx } from "clsx";
import { getFarewellText } from "../utils";
import { Languages } from "../constants";

const Status = ({
  isGameOver,
  isGameWon,
  isGameLost,
  isLastGuessIncorrect,
  wrongGuessCount,
}: {
  isGameOver: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
  isLastGuessIncorrect: boolean | "";
  wrongGuessCount: number;
}) => {
  const renderGameStatus = () => {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="italic">
          {getFarewellText(Languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2 className="text-xl font-semibold">You win!</h2>
          <p className="italic">Well done! 🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2 className="text-xl font-semibold">Game over!</h2>
          <p className="italic">You lose! Better start learning Assembly 😂</p>
        </>
      );
    }

    return null;
  };

  return (
    <section
      aria-live="polite"
      role="status"
      className={clsx(
        "text-status-text flex min-h-24 flex-col items-center justify-center gap-5 rounded py-3",
        isGameWon && "bg-green-bg",
        isGameLost && "bg-red-bg",
        !isGameOver && isLastGuessIncorrect && "bg-purple-bg",
      )}
    >
      {renderGameStatus()}
    </section>
  );
};

export default Status;
