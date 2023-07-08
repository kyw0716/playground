import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundaryTestPage } from './pages/ErrorBoundaryTestPage';
import { Main } from './pages/MainPage';
import { SuspenseTestPage } from './pages/SuspenseTestPage';
import ArrayMap from './pages/ArrayMap';
import { Todo } from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/errorBoundary" Component={ErrorBoundaryTestPage} />
        <Route path="/suspense" Component={SuspenseTestPage} />
        <Route path="/arrayMap" Component={ArrayMap} />
        <Route path="/todo" Component={Todo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
