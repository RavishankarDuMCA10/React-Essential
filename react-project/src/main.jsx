import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const [, , third] = ["giraffe", "elephant", "lion"];
console.log(third); 

const [first] = ["giraffe", "elephant", "lion"];
console.log(first); 

createRoot(document.getElementById('root')).render(<App />);
