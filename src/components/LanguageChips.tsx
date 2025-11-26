import { clsx } from "clsx";
import { Languages } from "../constants";

const LanguageChips = ({ wrongGuessCount }: { wrongGuessCount: number }) => {
  return (
    <section className="flex flex-wrap justify-center gap-1.5">
      {Languages.map((language, index) => (
        <span
          key={language.name}
          style={{
            color: language.color,
            backgroundColor: language.backgroundColor,
          }}
          className={clsx(
            "relative rounded p-2",
            index < wrongGuessCount &&
              "before:absolute before:inset-0 before:flex before:items-center before:justify-center before:bg-gray-600/70 before:text-2xl before:content-['☠️']",
          )}
        >
          {language.name}
        </span>
      ))}
    </section>
  );
};

export default LanguageChips;
