import { Languages } from "../constants";

const LanguageChips = () => {
  return (
    <section className="flex flex-wrap justify-center gap-1.5">
      {Languages.map((language) => (
        <span
          key={language.name}
          style={{
            color: language.color,
            backgroundColor: language.backgroundColor,
          }}
          className="rounded p-2"
        >
          {language.name}
        </span>
      ))}
    </section>
  );
};

export default LanguageChips;
