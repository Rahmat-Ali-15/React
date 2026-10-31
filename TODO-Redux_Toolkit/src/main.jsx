import { App } from './App.jsx'
import { store } from './store/Store.js'
;
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
