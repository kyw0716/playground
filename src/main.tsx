import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './style/GlobalStyle.tsx';
import { worker } from './mocks/browser.ts';

const render = async () => {
  await worker.start();

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

render();
