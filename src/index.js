import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentsProvider from 'context/CommentsContext';
import App from 'App';
import 'styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>,
);
