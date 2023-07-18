import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundaryTestPage } from './pages/ErrorBoundaryTestPage';
import { Main } from './pages/MainPage';
import { SuspenseTestPage } from './pages/SuspenseTestPage';
import ArrayMap from './pages/ArrayMap';
import TodoPage from './pages/TodoPage';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import BatchUpdate from './pages/BatchUpdate';

const todoClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={todoClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/errorBoundary" Component={ErrorBoundaryTestPage} />
          <Route path="/suspense" Component={SuspenseTestPage} />
          <Route path="/arrayMap" Component={ArrayMap} />
          <Route path="/todo" Component={TodoPage} />
          <Route path="/batchUpdate" Component={BatchUpdate} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
