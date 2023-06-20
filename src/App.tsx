import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundaryTestPage } from './pages/ErrorBoundaryTestPage';
import { Main } from './pages/MainPage';
import { SuspenseTestPage } from './pages/SuspenseTestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/errorBoundary" Component={ErrorBoundaryTestPage} />
        <Route path="/suspense" Component={SuspenseTestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
