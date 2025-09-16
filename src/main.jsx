
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Provider } from 'react-redux';
import store from './redux/store.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)
