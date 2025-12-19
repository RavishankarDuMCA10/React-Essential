import { useState } from 'react';
import './App.css'
import chef from "./images/chef.jpg"


function Header({name}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}

function Footer({year}) {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

const items = [
  "Macroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes}) {
  return (
    <>
      <div>
        <h2>Welcome to this beatiful restaurant!</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>The restaurant is currently {status ? "Open" : "Closed"}.</h1>
      <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Restaurant</button>
      <Header name="Alex" />
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  )
}

export default App
