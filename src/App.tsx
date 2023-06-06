import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundaryTestPage } from './pages/ErrorBoundaryTestPage';
import { Main } from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/errorBoundary" Component={ErrorBoundaryTestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
