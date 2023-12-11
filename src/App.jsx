import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import { ErrorBoundary } from "react-error-boundary";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">  
      <ErrorBoundary fallback={<div data-testid="error-message">Something went wrong</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail?" element={<DetailsPage />} />
          <Route path="*" component={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
