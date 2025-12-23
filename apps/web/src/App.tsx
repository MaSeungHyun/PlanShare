import TitleBar from "./components/TitleBar";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <TitleBar />
      <div className="relative w-full h-full flex-1">Content</div>
    </main>
  );
}

export default App;
