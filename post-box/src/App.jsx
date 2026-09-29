import PostBox from "./components/PostBox";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>PostBox</h1>
        <p>Share your thoughts with the world</p>
      </header>

      <main className="main">
        <PostBox />
      </main>

      <footer className="footer">
        Full Stack Lab MST • React Experiment
      </footer>

    </div>
  );
}

export default App;