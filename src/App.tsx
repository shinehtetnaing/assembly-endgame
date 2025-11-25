import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import Status from "./components/Status";

function App() {
  return (
    <main className="max-w-[450px] space-y-8">
      <Header />

      <Status />

      <LanguageChips />
    </main>
  );
}

export default App;
