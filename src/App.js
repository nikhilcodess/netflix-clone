import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>This is Netflix clone.</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fecthedNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fecthedTrending} />
    </div>
  );
}

export default App;
