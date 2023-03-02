import React from 'react'
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';

import App from './App'

import './index.css';

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
    );