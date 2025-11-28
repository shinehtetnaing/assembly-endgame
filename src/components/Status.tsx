import { clsx } from "clsx";

const Status = ({
  isGameOver,
  isGameWon,
  isGameLost,
}: {
  isGameOver: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
}) => {
  return (
    <section
      className={clsx(
        "text-status-text flex min-h-24 flex-col items-center justify-center gap-5 rounded py-3",
        isGameWon && "bg-green-bg",
        isGameLost && "bg-red-bg",
      )}
    >
      {isGameOver ? (
        <>
          <h2 className="text-xl font-semibold">
            {isGameWon ? "You win!" : "Game over!"}
          </h2>
          <p className="italic">
            {isGameWon
              ? "Well done! 🎉"
              : "You lose! Better start learning Assembly 😂"}
          </p>
        </>
      ) : null}
    </section>
  );
};

export default Status;
