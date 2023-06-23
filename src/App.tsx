import TestComponent from "./components/TestComponent/TestComponent";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";
import ErrorFallbackComponent from "./components/ErrorFallbackComponent/ErrorFallbackComponent";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const falseUrl = "https://idonotexist.com";
  const [fetchUrl, setFetchUrl] = useState<string>(url);

  const logError = (error: Error, info: { componentStack: string }) => {
    console.error("---CAUGHT AN ERROR---", error, info);
  };

  return (
    <div className="App">
      <h1>REACT ERROR BOUNDARY TEST</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallbackComponent}
        onReset={() => setFetchUrl(url)}
        onError={logError}
        resetKeys={[fetchUrl]}
      >
        <TestComponent url={fetchUrl} />
      </ErrorBoundary>
      <button onClick={() => setFetchUrl(falseUrl)}>
        BREAK FETCH FOR TESTING
      </button>
    </div>
  );
}

export default App;
