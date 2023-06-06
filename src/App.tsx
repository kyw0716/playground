import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundaryTestPage } from './pages/ErrorBoundaryTestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/errorBoundary" Component={ErrorBoundaryTestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
